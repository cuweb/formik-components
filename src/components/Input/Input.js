import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError/TextError'
import { primaryStyles, labelStyles, fieldStyles } from '../../styles/styles'

function Input(props) {
  const { label, name, ...rest } = props

  return (
    <div className={`${primaryStyles.wrapper} form-control`}>
      <label htmlFor={name} className={labelStyles.label}>{label}</label>
      <Field id={name} name={name} className={fieldStyles.input} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Input
