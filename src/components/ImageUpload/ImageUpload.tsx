import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
  convertToPixelCrop,
} from "react-image-crop";
import { canvasPreview } from "../../helpers/canvasPreview";
import { useDebounceEffect } from "../../helpers/useDebounceEffect";
import "react-image-crop/dist/ReactCrop.css";

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

const ImageUpload = () => {
  const [imgSrc, setImgSrc] = useState("");
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const hiddenAnchorRef = useRef<HTMLAnchorElement>(null);
  const blobUrlRef = useRef("");
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState<number | undefined>(16 / 9);
  const [errorMessage, setErrorMessage] = useState("");

  const initialValues = {
    file: null,
  };

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result?.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  function onDownloadCropClick() {
    if (!previewCanvasRef.current) {
      throw new Error("Crop canvas does not exist");
    }

    previewCanvasRef.current.toBlob((blob) => {
      if (!blob) {
        throw new Error("Failed to create blob");
      }
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }
      blobUrlRef.current = URL.createObjectURL(blob);
      hiddenAnchorRef.current!.href = blobUrlRef.current;
      hiddenAnchorRef.current!.click();
    });
  }

  function onResetCropClick() {
    if (!previewCanvasRef.current) {
      console.error("Crop canvas does not exist");
    }
    // Reset image source and crop
    setImgSrc("");
    setCrop(undefined);
    setCompletedCrop(undefined);

    // Reset scale and rotate
    setScale(1);
    setRotate(0);

    // Reset aspect ratio
    setAspect(16 / 9);

    // Reset form values
    formik.resetForm();

    // Clear any error message
    setErrorMessage("");
  }

  function onUploadCropClick() {
    if (!previewCanvasRef.current) {
      console.error("Crop canvas does not exist");
    }

    previewCanvasRef?.current?.toBlob(async (blob) => {
      if (!blob) {
        throw new Error("Failed to create blob");
      }
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }

      const formData = new FormData();
      formData.append("file", blob, "cropped-image.png");

      // Create a Yup schema for the cropped image
      const croppedImageSchema = Yup.object().shape({
        file: Yup.mixed()
          .test("is-allowed-format", "Invalid file format", (value) => {
            if (!value) return true;

            const file = value as File;
            const fileType = file.type;
            const allowedFileTypes = [
              "image/jpeg",
              "image/png",
              "image/gif",
              "image/bmp",
              "image/webp",
            ];

            return allowedFileTypes.includes(fileType);
          })
          .test(
            "is-file-size-valid",
            "File size must be less than 10MB",
            (value) => {
              if (!value) return true;

              const file = value as File;

              return file.size <= 10 * 1024 * 1024;
            }
          )
          .test(
            "is-image-dimensions-valid",
            "Image dimensions must be less than 1000x1000 pixels",
            (value) => {
              if (!value) return true; // No file selected, validation passed

              const file = value as File;

              if (file.type.startsWith("image/")) {
                return new Promise((resolve) => {
                  const image = new Image();
                  image.src = URL.createObjectURL(file);
                  image.onload = () => {
                    const width = image.width;
                    const height = image.height;
                    resolve(width <= 1000 && height <= 1000);
                  };
                  image.onerror = () => {
                    resolve(false);
                  };
                });
              }

              // Non-image files are considered valid
              return true;
            }
          ),
      });

      try {
        // Validate the cropped image using Yup schema
        await croppedImageSchema.validate({ file: blob });
        // If validation succeeds, you can proceed with the upload
        console.log("Image is valid and can be uploaded");
        setErrorMessage("");
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        } else {
          // Handle cases where 'error' is not an instance of Error
          console.error("An error occurred:", error);
        }
      }
    });
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate
        );
      }
    },
    100,
    [completedCrop, scale, rotate]
  );

  function handleToggleAspectClick() {
    if (aspect) {
      setAspect(undefined);
    } else {
      setAspect(16 / 9);

      if (imgRef.current) {
        const { width, height } = imgRef.current;
        const newCrop = centerAspectCrop(width, height, 16 / 9);
        setCrop(newCrop);
        // Updates the preview
        setCompletedCrop(convertToPixelCrop(newCrop, width, height));
      }
    }
  }

  const onSubmit = () => {
    // You can handle the file here, e.g., upload it to a server
    console.log("Validating and uploading...");
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="App">
        <div className="Crop-Controls">
          <input
            type="file"
            id="file"
            name="file"
            accept="image/*"
            onChange={onSelectFile}
          />
          <div>
            <label htmlFor="scale-input">Scale: </label>
            <input
              id="scale-input"
              type="number"
              step="0.1"
              value={scale}
              disabled={!imgSrc}
              className="text-black"
              onChange={(e) => setScale(Number(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="rotate-input">Rotate: </label>
            <input
              id="rotate-input"
              type="number"
              value={rotate}
              disabled={!imgSrc}
              className="text-black"
              onChange={(e) =>
                setRotate(Math.min(180, Math.max(-180, Number(e.target.value))))
              }
            />
          </div>
          <div>
            <button onClick={handleToggleAspectClick}>
              Toggle aspect {aspect ? "off" : "on"}
            </button>
          </div>
        </div>
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        {!!imgSrc && (
          <ReactCrop
            crop={crop}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={aspect}
            // minWidth={400}
            minHeight={200}
          >
            <img
              ref={imgRef}
              alt="Crop me"
              src={imgSrc}
              style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
              onLoad={onImageLoad}
            />
          </ReactCrop>
        )}
        {!!completedCrop && (
          <>
            <div>
              <canvas
                ref={previewCanvasRef}
                style={{
                  border: "1px solid black",
                  objectFit: "contain",
                  width: completedCrop.width,
                  height: completedCrop.height,
                }}
              />
            </div>
            <div>
              <button type="button" onClick={onDownloadCropClick}>
                Download Crop
              </button>
              <a
                href="#hidden"
                ref={hiddenAnchorRef}
                download
                style={{
                  position: "absolute",
                  top: "-200vh",
                  visibility: "hidden",
                }}
              >
                Hidden download
              </a>
            </div>
          </>
        )}
      </div>
      <div className="mb-2">
        <button type="submit" onClick={onUploadCropClick}>
          Upload
        </button>
      </div>
      <div>
        <button type="submit" onClick={onResetCropClick}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default ImageUpload;
