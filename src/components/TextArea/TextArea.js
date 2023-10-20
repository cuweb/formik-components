import { Field, ErrorMessage } from "formik";
import TextError from "../TextError/TextError";
import { primaryStyles, textStyles, fieldStyles } from "../../styles/styles";
import { getMaxWidthClass } from "../../helpers/optionClasses";

function TextArea(props) {
  const { label, name, maxWidth, helper, required, ...rest } = props;
  const fieldMaxWidth = getMaxWidthClass(maxWidth);
  const requiredClass = required ? primaryStyles.required : "";

  return (
    <div
      className={`${primaryStyles.wrapper} ${fieldMaxWidth} ${requiredClass} form-control`}
    >
      <label htmlFor={name} className={textStyles.label}>
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {helper && <div className={textStyles.helper}>{helper}</div>}

      <Field
        as="textarea"
        id={name}
        name={name}
        className={`${fieldStyles.input} ${fieldStyles.disabled}`}
        {...rest}
      />

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default TextArea;
