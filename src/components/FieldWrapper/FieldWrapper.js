import { gridColsClass } from "../../styles/optionClasses";

function FieldWrapper({ children, cols }) {
  let gridColClass = 'space-y-5'

  if (cols === 'auto') {
    gridColClass = 'flex gap-5'
  } else if (cols <= 4) {
    gridColClass = `grid ${gridColsClass[cols]} gap-5`
  }

  return <div className={gridColClass}>{children}</div>;
}

export default FieldWrapper
