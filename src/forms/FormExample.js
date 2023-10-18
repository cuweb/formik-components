import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FieldControl from '../components/FieldControl/FieldControl'
import FieldWrapper from '../components/FieldWrapper/FieldWrapper'
import ImageUpload from '../components/ImageUpload/ImageUpload'
import FileUpload from '../components/FileUpload/FileUpload'
import FormButton from '../components/FormButton/FormButton'

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
    firstname: '',
    lastname: '',
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: [],
    birthDate: null
  }

  const validationSchema = Yup.object({
    // firstname: Yup.string().required('Required'),
    // lastname: Yup.string().required('Required'),
    // email: Yup.string().required('Required').email("Invalid email address"),
    // description: Yup.string().required('Required'),
    // selectOption: Yup.string().required('Required'),
    // radioOption: Yup.string().required('Required'),
    // checkboxOption: Yup.array().required('Required'),
    // birthDate: Yup.date().required('Required').nullable()
  })

  const onSubmit = values => console.log('Form data', values)

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => (
          <Form>
            <FieldWrapper cols={2}>
              <FieldControl
                control='input'
                type="text"
                label='First Name'
                name='firstname'
                placeholder="Enter your name"
                helper="Enter your first name"
                required />
              <FieldControl
                control='input'
                type="text"
                label='Last Name'
                name='lastname'
                placeholder="Enter your name"
                helper="Enter your last name"
                required />
            </FieldWrapper>

            <FieldControl
              control='input'
              type="email"
              label='Email'
              name='email'
              placeholder="Enter a valid email"
              helper="Enter a valid email"
              maxWidth='2xl'
              required />

            <FieldControl
              control='textarea'
              label='Description'
              name='description'
              rows="5"
              placeholder="Please describe"
              helper="Enter a description"
              maxWidth='md'
              required />

            <FieldControl
              control='select'
              label='Select a topic'
              name='selectOption'
              options={dropdownOptions}
              helper="Please select a topic of your choosing"
              required />

            <FieldWrapper cols={3}>
              <FieldControl
                control='radio'
                label='Radio topic'
                name='radioOption'
                options={radioOptions}
                helper="Please select a thing"
                required />
              <FieldControl
                control='radio'
                label='Radio topic'
                name='radioOption'
                options={radioOptions}
                helper="Please select a thing"
                required />
            </FieldWrapper>

            <FieldControl
              control='radio'
              label='Radio topic'
              name='radioOption'
              options={radioOptions}
              helper="Please select a thing"
              isInline
              required />

            <FieldWrapper cols={3}>
              <FieldControl
                control='checkbox'
                label='Checkbox topic'
                name='checkboxOption'
                options={checkboxOptions}
                helper="Please select a thing"
                required />
              <FieldControl
                control='checkbox'
                label='Checkbox topic'
                name='checkboxOption'
                options={checkboxOptions}
                helper="Please select a thing"
                required />
            </FieldWrapper>

            <FieldControl
              control='checkbox'
              label='Checkbox topic'
              name='checkboxOption'
              options={checkboxOptions}
              helper="Please select a thing"
              isInline
              required />

            <FieldControl
              control='date'
              label='Pick a date'
              name='birthDate'
              helper="Please specify your DOB"
              required />

            <h2 className="mb-4 text-2xl font-bold">Image Upload</h2>
            <ImageUpload />

            <h2 className="mb-4 text-2xl font-bold">File Upload</h2>
            <FileUpload />

            <FormButton />

            {/* <button
              type="submit"
              aria-label="Submit"
              className="inline-flex items-center justify-center gap-1 px-3 py-2 text-sm font-medium text-white rounded-md cu-button not-prose md:px-6 md:py-3 md:text-base hover:text-white focus:outline-none bg-cu-red hover:bg-cu-black-600"
            >
              Submit
            </button> */}
          </Form>
        )}
      </Formik>



    </>
  )
}

export default FormExample
