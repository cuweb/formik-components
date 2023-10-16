import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError/TextError'
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { primaryStyles, textStyles, fieldStyles } from '../../styles/styles'

function DatePicker(props) {
  const { label, name, helper, required, ...rest } = props;
  const requiredClass = required ? primaryStyles.required : ''

  return (
    <div className={`${primaryStyles.wrapper} ${requiredClass} form-control`}>
      <label
        htmlFor={name}
        className={textStyles.label}
      >
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {helper && <div className={textStyles.helper}>{helper}</div>}

      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form
          const { value } = field

          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={val => setFieldValue(name, val)}
              className={fieldStyles.input}
            />
          )
        }}
      </Field>

      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default DatePicker