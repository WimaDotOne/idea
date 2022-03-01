
import { Options } from "../../../Model/Options"
import cl from "./MultipleChoice.module.scss"

interface IMultipleChoiceProp {
  name: string
  options: Options
  onChange: (newValue: string)=>void
}
export function MultipleChoice({
  name,
  options,
  onChange,
}: IMultipleChoiceProp) {

  return(<>
    <div className={cl.div0}>
    {
      options ? options.array.map((option, i)=>
      <div className={cl.optionDiv} key={i}>
        <input className={cl.input} type="radio" id={option.value} name={name} 
          value={option.value} autoComplete="off"
          onChange={(e)=>{onChange(e.target.value)}}
        />
        <label className={cl.label} htmlFor={option.value}>{option.text}</label>
      </div>
      ): null
    }
    </div>
  </>)
}