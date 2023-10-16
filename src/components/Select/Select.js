import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError/TextError'
import { primaryStyles, labelStyles, fieldStyles } from '../../styles/styles'
import { getMaxWidthClass } from '../../helpers/optionClasses'

function Select(props) {
  const { label, name, options, maxWidth, ...rest } = props
  const fieldMaxWidth = getMaxWidthClass(maxWidth);

  return (
    <div className={`${primaryStyles.wrapper} ${fieldMaxWidth} form-control`}>
      <label htmlFor={name} className={labelStyles.label}>{label}</label>
      <Field as='select' id={name} name={name} className={fieldStyles.input} {...rest}>
        {options.map(option => {
          return(
            <option key={option.value} value={option.value}>{option.key}</option>
          )
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Select
