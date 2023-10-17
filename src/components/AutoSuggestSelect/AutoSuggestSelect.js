import React from "react";
import { Field, ErrorMessage } from "formik";
import Select from "react-select";
import { primaryStyles, textStyles, fieldStyles } from "../../styles/styles";
import { getMaxWidthClass } from "../../helpers/optionClasses";
import TextError from "../TextError/TextError";

const AutoSuggestSelect = (props) => {
  const { label, name, options, maxWidth, helper, required, ...rest } = props;
  const fieldMaxWidth = getMaxWidthClass(maxWidth);
  const requiredClass = required ? primaryStyles.required : "";

  return (
    <>
      <div
        className={`${primaryStyles.wrapper} ${fieldMaxWidth} ${requiredClass} form-control`}
      >
        <label htmlFor={name} className={textStyles.label}>
          {label} {required && <span className={textStyles.required}>*</span>}
        </label>

        {helper && <div className={textStyles.helper}>{helper}</div>}
        <Field name={name} {...rest}>
          {({ field, form }) => (
            <Select
              {...field}
              {...rest}
              options={options}
              onChange={(selectedOption) =>
                form.setFieldValue(field.name, selectedOption)
              }
              onBlur={() => form.setFieldTouched(field.name, true)}
              isSearchable={true}
              isClearable={true}
              className={fieldStyles.input}
            />
          )}
        </Field>
        <ErrorMessage name={name} component={TextError} />
      </div>
    </>
  );
};

export default AutoSuggestSelect;
