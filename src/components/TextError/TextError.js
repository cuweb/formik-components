import React from 'react'

function TextError(props) {
  return (
    <div className="font-semibold error text-cu-red">
      {props.children}
    </div>
  )
}

export default TextError