import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../components/FormikControl/FormikControl'
import FieldWrapper from '../components/FieldWrapper/FieldWrapper'

function FormExample() {
  const dropdownOptions = [
    { key: 'Select an Option', value: '' },
    { key: 'Option 1', value: 'sOption1' },
    { key: 'Option 2', value: 'sOption2' },
    { key: 'Option 3', value: 'sOption3' },
  ]
  
  const radioOptions = [
    { key: 'Option 1', value: 'rOption1' },
    { key: 'Option 2', value: 'rOption2' },
    { key: 'Option 3', value: 'rOption3' },
  ]
  
  const checkboxOptions = [
    { key: 'Option 1', value: 'cOption1' },
    { key: 'Option 2', value: 'cOption2' },
    { key: 'Option 3', value: 'cOption3' },
  ]
  
  const initialValues = {
    name: '',
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: [],
    birthDate: null
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().required('Required').email("Invalid email address"),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOption: Yup.array().required('Required'),
    birthDate: Yup.date().required('Required').nullable()
  })

  const onSubmit = values => console.log('Form data', values)

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form>
          <FieldWrapper cols={2}>
            <FormikControl
              control='input'
              type="text"
              label='Name'
              name='name'
              placeholder="Enter your name"
            />
            <FormikControl
              control='input'
              type="text"
              label='Name'
              name='name'
              placeholder="Enter your name"
            />
          </FieldWrapper>

          <FormikControl
            control='input'
            type="email"
            label='Email'
            name='email'
            placeholder="Enter a valid email"
          />

          <FormikControl
            control='textarea'
            label='Description'
            name='description'
            rows="5"
            placeholder="Please describe"
          />

          <FormikControl
            control='select'
            label='Select a topic'
            name='selectOption'
            options={dropdownOptions}
          />

          <FieldWrapper>
            <FormikControl
              control='radio'
              label='Radio topic'
              name='radioOption'
              options={radioOptions}
            />
          </FieldWrapper>

          <FieldWrapper>
            <FormikControl
              control='checkbox'
              label='Checkbox topic'
              name='checkboxOption'
              options={checkboxOptions}
            />
          </FieldWrapper>

          <FieldWrapper>
            <FormikControl
              control='date'
              label='Pick a date'
              name='birthDate'
            />
          </FieldWrapper>
          
          <button
            type="submit"
            aria-label="Submit"
            className="inline-flex items-center justify-center gap-1 px-3 py-2 text-sm font-medium text-white rounded-md cu-button not-prose md:px-6 md:py-3 md:text-base hover:text-white focus:outline-none bg-cu-red hover:bg-cu-black-600"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default FormExample
