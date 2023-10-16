import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError/TextError'
import { primaryStyles, labelStyles, fieldStyles } from '../../styles/styles'

function Radio(props) {
  const { label, name, options, isInline, ...rest } = props
  const displayInline = isInline ? 'flex flex-row gap-10' : 'flex flex-col gap-2'

  return (
    <div className={`${primaryStyles.wrapper} form-control`}>
      <label htmlFor={name} className={labelStyles.label}>{label}</label>
      <fieldset className={displayInline}>
        <Field name={name} {...rest}>
          {({ field }) => {
            return options.map(option => {
              return (
                <div key={option.value} className={fieldStyles.radioCheck}>
                  <input
                    type="radio"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                    />
                  <label htmlFor={option.value}>{option.key}</label>
                </div>
              )
            })
          }}
        </Field>
      </fieldset>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Radio
