import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError/TextError'
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { primaryStyles, labelStyles, fieldStyles } from '../../styles/styles'

function DatePicker(props) {
  const { label, name,...rest } = props;
  return (
    <div className={`${primaryStyles.wrapper} form-control`}>
      <label htmlFor={name} className={labelStyles.label}>{label}</label>
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