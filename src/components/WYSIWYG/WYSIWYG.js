import React, { useState } from 'react';
import { useField, ErrorMessage } from 'formik'
import TextError from '../TextError/TextError'
import { primaryStyles, textStyles } from '../../styles/styles'
import { getMaxWidthClass } from '../../helpers/optionClasses'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function WYSIWYG(props) {
  const { label, name, maxWidth, helper, required, ...rest } = props;
  const [field] = useField(name);
  const fieldMaxWidth = getMaxWidthClass(maxWidth);
  const requiredClass = required ? primaryStyles.required : '';
  const [text, setText] = useState(field.value);

  const handleTextChange = (value) => {
    setText(value);
    field.onChange({ target: { name, value: value } });
  };

  return (
    <div className={`${primaryStyles.wrapper} ${fieldMaxWidth} ${requiredClass} form-control`}>
      <label htmlFor={name} className={textStyles.label}>
        {label} {required && <span className={textStyles.required}>*</span>}
      </label>

      {helper && <div className={textStyles.helper}>{helper}</div>}

      <ReactQuill value={text} onChange={handleTextChange} {...rest} />

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default WYSIWYG
