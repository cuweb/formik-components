import * as Yup from "yup";
const imageUploadValidationSchema = Yup.object().shape({
  file: Yup.mixed()
    .test("is-allowed-format", "Invalid file format", (value) => {
      if (!value) return true;

      const file = value;
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

        const file = value;

        return file.size <= 10 * 1024 * 1024;
      }
    )
    .test(
      "is-image-dimensions-valid",
      "Image dimensions must be less than 1000x1000 pixels",
      (value) => {
        if (!value) return true; // No file selected, validation passed

        const file = value;

        if (file.type.startsWith("image/")) {
          return new Promise((resolve) => {
            const image = new Image();
            image.src = URL.createObjectURL(file);
            image.onload = () => {
              const width = image.width;
              const height = image.height;
              resolve(width <= 2000 && height <= 2000);
            };
            image.onerror = () => {
              resolve(false);
            };
          });
        }
        return true;
      }
    ),
});

export default imageUploadValidationSchema