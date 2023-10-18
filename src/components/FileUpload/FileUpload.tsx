import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FileUpload = () => {
  const initialValues = {
    file: null,
  };

  const validationSchema = Yup.object().shape({
    file: Yup.mixed()
      .required("Please select a file")
      .test("is-allowed-format", "Invalid file format", (value) => {
        if (!value) return true;

        const file = value as File;
        const fileType = file.type;
        const allowedFileTypes = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "application/vnd.ms-excel",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "application/vnd.ms-powerpoint",
          "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          "text/plain",
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
      ),
  });

  const onSubmit = (values: { file: any }) => {
    // You can handle the file here, e.g., upload it to a server
    console.log("Uploaded file:", values.file);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-2">
        <label htmlFor="file">Upload a File:</label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={(event) => {
            const selectedFile = event.currentTarget.files?.[0]; // Use optional chaining
            formik.setFieldValue("file", selectedFile);
          }}
          onBlur={formik.handleBlur}
        />
        {formik.touched.file && formik.errors.file && (
          <div className="text-red-500">{formik.errors.file}</div>
        )}
      </div>

      <button type="submit">Submit File Upload</button>
    </form>
  );
};

export default FileUpload;
