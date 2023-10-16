import { gridColsClass } from "../../helpers/optionClasses";

function FieldWrapper({ children, cols }) {
  let gridColClass = 'space-y-5'

  if (cols <= 4) {
    gridColClass = `grid ${gridColsClass[cols]} gap-5`
  }

  return <div className={gridColClass}>{children}</div>;
}

export default FieldWrapper
