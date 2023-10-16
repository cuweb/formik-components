function FormButton() {
  return (
    <button
      type="submit"
      aria-label="Submit"
      className="inline-flex items-center justify-center gap-1 px-3 py-2 text-sm font-medium text-white rounded-md cu-button not-prose md:px-6 md:py-3 md:text-base hover:text-white focus:outline-none bg-cu-red hover:bg-cu-black-600"
    >
      Submit
    </button>
  )
}

export default FormButton