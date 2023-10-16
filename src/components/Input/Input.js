import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError/TextError'
import { wrapperStyles, labelStyles, fieldStyles } from '../../styles/styles'

function Input(props) {
  const { label, name, ...rest } = props

  return (
    <div className={`${wrapperStyles.wrapper} form-control`}>
      <label htmlFor={name} className={labelStyles.label}>{label}</label>
      <Field id={name} name={name} {...rest} className={fieldStyles.input} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Input