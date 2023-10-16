import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError/TextError'
import { primaryStyles, labelStyles, fieldStyles } from '../../styles/styles'

function TextArea(props) {
  const { label, name, ...rest } = props
  
  return (
    <div className={primaryStyles.wrapper}>
      <label htmlFor={name} className={labelStyles.label}>{label}</label>
      <Field as="textarea" id={name} name={name} className={fieldStyles.input} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default TextArea
