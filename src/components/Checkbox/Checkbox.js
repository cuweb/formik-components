import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError/TextError";
import { primaryStyles, textStyles, fieldStyles } from "../../styles/styles";

function Checkbox(props) {
  const { label, name, options, isInline, helper, required, ...rest } = props;
  const requiredClass = required ? primaryStyles.required : "";
  const displayInline = isInline
    ? fieldStyles.horizontalOptions
    : fieldStyles.verticalOptions;

  return (
    <div className={`${primaryStyles.wrapper} ${requiredClass} form-control`}>
      <label htmlFor={name} className={textStyles.label}>
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {helper && <div className={textStyles.helper}>{helper}</div>}

      <fieldset className={displayInline}>
        <Field name={name} {...rest}>
          {({ field }) => {
            return (
              options &&
              options.map((option) => {
                return (
                  <div key={option.value} className={fieldStyles.radioCheck}>
                    <input
                      type="checkbox"
                      id={option.value}
                      {...field}
                      value={option.value}
                      checked={field.value.includes(option.value)}
                    />
                    <label htmlFor={option.value}>{option.key}</label>
                  </div>
                );
              })
            );
          }}
        </Field>
      </fieldset>

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Checkbox;
