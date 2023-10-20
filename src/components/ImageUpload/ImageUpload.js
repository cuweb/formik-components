import { ErrorMessage, useFormik } from "formik";
import TextError from "../TextError/TextError";
import { fieldStyles, primaryStyles, textStyles } from "../../styles/styles";
import { getMaxWidthClass } from "../../helpers/optionClasses";
import imageUploadValidationSchema from "../../helpers/imageUploadValidationSchema";

function ImageUpload(props) {
  const { label, name, maxWidth, helper, required, ...rest } = props;
  const fieldMaxWidth = getMaxWidthClass(maxWidth);
  const requiredClass = required ? primaryStyles.required : "";

  const initialValues = {
    file: null,
  };
  const validationSchema = imageUploadValidationSchema;
  const onSubmit = (values) => {
    // You can handle the file here, e.g., upload it to a server
    console.log("Uploaded file:", values.file);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <div
      className={`${primaryStyles.wrapper} ${fieldMaxWidth} ${requiredClass} form-control`}
    >
      <label htmlFor={name} className={textStyles.label}>
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {helper && <div className={textStyles.helper}>{helper}</div>}

      <input
        type="file"
        id="file"
        name="file"
        className={`${fieldStyles.uploads} ${fieldStyles.disabledUpload}`}
        onChange={(event) => {
          const selectedFile = event.currentTarget.files?.[0]; // Use optional chaining
          formik.setFieldValue("file", selectedFile);
        }}
        {...rest}
        onBlur={formik.handleBlur}
      />

      {formik.touched.file && formik.errors.file && (
        <TextError>{formik.errors.file}</TextError>
      )}

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default ImageUpload;
