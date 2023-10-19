import React from "react";
import { ErrorMessage, useField } from "formik";
import TextError from "../TextError/TextError";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { primaryStyles, textStyles, fieldStyles } from "../../styles/styles";
import { getMaxWidthClass } from "../../helpers/optionClasses";

function DateTimePicker(props) {
  const {
    label,
    name,
    helper,
    required,
    showTime,
    dateFormat = "MMMM d, yyyy",
    timeFormat = "HH:mm",
    timeIntervals = 15,
    placeholder,
    customMinDate,
    maxWidth,
    ...rest
  } = props;
  const requiredClass = required ? primaryStyles.required : "";
  const [field, , helpers] = useField(name);
  const { setValue, setTouched, setError } = helpers;

  const fieldMaxWidth = getMaxWidthClass(maxWidth);

  const setFieldProps = (date) => {
    setValue(date);
    setTouched(true);
    setError(undefined);
  };

  return (
    <div
      className={`${primaryStyles.wrapper} ${fieldMaxWidth} ${requiredClass} form-control`}
    >
      <label htmlFor={name} className={textStyles.label}>
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {helper && <div className={textStyles.helper}>{helper}</div>}

      <DatePicker
        selected={field.value}
        name={name}
        onChange={(date) => {
          setFieldProps(date);
        }}
        showTimeSelect={showTime}
        timeFormat={timeFormat}
        timeIntervals={timeIntervals}
        dateFormat={dateFormat}
        minDate={customMinDate || new Date()}
        placeholderText={placeholder}
        className={`${fieldStyles.input} w-full`}
        {...rest}
      />

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default DateTimePicker;
