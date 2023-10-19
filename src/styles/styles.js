export const primaryStyles = {
  wrapper: `flex flex-col gap-2`,
  required: ``,
  // required: `border border-cu-red px-5 py-4 bg-cu-red-25 rounded-md`
}

export const textStyles = {
  label: `block font-semibold text-lg`,
  helper: `block text-sm text-cu-black-600 mb-1`,
  required: `text-cu-red`
}

export const fieldStyles = {
  input: `border border-cu-black-200 rounded-md placeholder:text-cu-black-400`,
  select: `border border-cu-black-200 rounded-md`,
  radioCheck: `flex items-center gap-2`,
  horizontalOptions: `flex flex-row gap-10`,
  verticalOptions: `flex flex-col gap-2`,
  uploads: `max-w-xs focus:outline-none`,
  errorInput: `border border-red-600 rounded-md p-2`,
};

export const fieldErrorStyles = {
  input: `text-sm font-medium text-cu-red`,
};
