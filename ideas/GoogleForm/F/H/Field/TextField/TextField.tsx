
import cl from "./TextField.module.scss"

interface ITextFieldProp {
  value: string
  onChange: (newValue: string)=>void
  maxLength: number
  ghost?: string
  setFocus?: (focus: boolean)=>void
}
export function TextField({
  value, onChange,
  ghost, maxLength,
  setFocus
}: ITextFieldProp) {

  function onFocus() {
    if(setFocus) { setFocus(true) }
  }

  function onBlur() {
    if(setFocus) { setFocus(false) }
  }

  return(<>
    <div className={cl.div0}>
      <input className={cl.input} value={value}
        placeholder={ghost}
        maxLength={maxLength}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(e)=>{onChange(e.target.value)}}/>
    </div>
  </>)
}