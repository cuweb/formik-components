import { ErrorMessage, useFormik } from 'formik'
import TextError from '../TextError/TextError'
import { primaryStyles, textStyles } from '../../styles/styles'
import { getMaxWidthClass } from '../../helpers/optionClasses'
import fileUploadValidationSchema from "../../helpers/fileUploadValidationSchema"

function FileUpload(props) {
  const { label, name, maxWidth, helper, required, ...rest } = props
  const fieldMaxWidth = getMaxWidthClass(maxWidth);
  const requiredClass = required ? primaryStyles.required : ''
  const initialValues = {
    file: null,
  };
  const onSubmit = (values) => {
    // You can handle the file here, e.g., upload it to a server
    console.log("Uploaded file:", values.file);
  };
  const validationSchema = fileUploadValidationSchema
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <div className={`${primaryStyles.wrapper} ${fieldMaxWidth} ${requiredClass} form-control`}>
      <label
        htmlFor={name}
        className={textStyles.label}
      >
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {helper && <div className={textStyles.helper}>{helper}</div>}
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

      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default FileUpload
