import { useField, ErrorMessage } from "formik";
import Select from "react-select";
import { primaryStyles, textStyles } from "../../styles/styles";
import { getMaxWidthClass } from "../../helpers/optionClasses";
import TextError from "../TextError/TextError";

const AutoSuggest = (props) => {
  const { label, name, options, maxWidth, helper, required, ...rest } = props;
  const fieldMaxWidth = getMaxWidthClass(maxWidth);
  const requiredClass = required ? primaryStyles.required : "";
  const [field] = useField(name);

  return (
    <div className={`${primaryStyles.wrapper} ${fieldMaxWidth} ${requiredClass} form-control`}>
      <label htmlFor={name} className={textStyles.label}>
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {helper && <div className={textStyles.helper}>{helper}</div>}

      <Select
        {...field}
        {...rest}
        options={options}
        onChange={(selectedOption) => {
          field.onChange({ target: { name, value: selectedOption } });
        }}
        onBlur={field.onBlur}
        isSearchable={true}
        isClearable={true}
        className="[&>div]:border [&>div]:border-cu-black-200 [&>div]:rounded-md [&>div]:placeholder:text-cu-black-400 [&>div]:pr-0.5 [&>div]:py-0.5 [&>div]:pl-1.5"
      />

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default AutoSuggest;
