import React from "react";
import { Field, ErrorMessage, useField, useFormikContext } from "formik";
import Select from "react-select";
import { primaryStyles, textStyles, fieldStyles } from "../../styles/styles";
import { getMaxWidthClass } from "../../helpers/optionClasses";
import TextError from "../TextError/TextError";

const AutoSuggestSelect = (props) => {
  const { label, name, options, maxWidth, helper, required, ...rest } = props;
  const fieldMaxWidth = getMaxWidthClass(maxWidth);
  const requiredClass = required ? primaryStyles.required : "";

  const [field, form, helpers] = useField(props);
  const { setValue, setTouched, setError } = helpers;

  const setFieldProps = (selectedOption) => {
    setValue(selectedOption.value);
    setTouched(true);
    setError(undefined);
  };

  return (
    <>
      <div
        className={`${primaryStyles.wrapper} ${fieldMaxWidth} ${requiredClass} form-control`}
      >
        <label htmlFor={name} className={textStyles.label}>
          {label} {required && <span className={textStyles.required}>*</span>}
        </label>

        {helper && <div className={textStyles.helper}>{helper}</div>}
        <div className="mt-2">
          <Select
            name={name}
            instanceId="select-box"
            value={
              options
                ? options.find((option) => option.value === field.value)
                : ""
            }
            onChange={(selectedOption) => setFieldProps(selectedOption)}
            options={options}
            className={fieldStyles.input}
            {...rest}
          />
          <ErrorMessage name={name} component={TextError} />
        </div>
      </div>
    </>
  );
};

export default AutoSuggestSelect;
