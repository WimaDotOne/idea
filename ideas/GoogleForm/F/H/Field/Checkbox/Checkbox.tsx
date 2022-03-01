import cl from "./Checkbox.module.scss"

interface ICheckboxProp {
  name: string
  text: string
  onChange: ()=>void
}
export function Checkbox({
  name,
  text,
  onChange
}: ICheckboxProp) {

  return(<>
    <div className={cl.div0}>
      <input className={cl.input} 
        type="checkbox" 
        id={name} name={name} value={text} onChange={onChange}/>
      <label className={cl.label} htmlFor={name}>{text}</label>
    </div>
  </>)
}