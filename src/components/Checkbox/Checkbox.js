import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError/TextError'
import { primaryStyles, labelStyles } from '../../styles/styles'

function Checkbox(props) {
  const { label, name, options, ...rest } = props

  return (
    <div className={`${primaryStyles.wrapper} form-control`}>
      <label htmlFor={name} className={labelStyles.label}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map(option => {
            return (
              <React.Fragment key={option.value}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            )
          })
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Checkbox
