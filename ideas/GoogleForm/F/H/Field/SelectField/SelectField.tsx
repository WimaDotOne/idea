
import { SvgIcon } from "../../../../../Svg/SvgIcon"
import { Options } from "../../../Model/Options"
import cl from "./SelectField.module.scss"

interface ISelectFieldProp {
  options: Options
  value: string
  onChange: (newValue: string)=>void
  ghost?: string
}
export function SelectField({
  options,
  value, onChange,
  ghost,
}: ISelectFieldProp) {

  return(<>
    <div className={cl.div0}>
      <div className={cl.div1}>
        {
          ghost && !value ? <div className={cl.ghost}><div>{ghost}</div></div>:null  
        }
        <select autoComplete="off"
          className={cl.select} value={value} placeholder={ghost}
          onChange={(e)=>{onChange(e.target.value)}}
        >
          <option className={cl.ghost} value=""></option>
          {
            options ?
            options.array.map((option, i)=>
              <option key={option.value+i} value={option.value}>
                {option.text}
              </option>
            ): null
          }
        </select>
        <div className={cl.arrow}>
          <SvgIcon name="chevron.down" width={11} color="gray" strokeWidth={20} />
        </div>
      </div>
    </div>
  </>)
}