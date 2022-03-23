import { ClassNames } from "../../../../../Core/fCore"
import cl from "./Button1.module.scss"

interface IButton1Prop {
  text: string
  onClick: ()=>void
  disable?: boolean
}
export function Button1({
  text,
  onClick,
  disable
}: IButton1Prop) {

  function onClickButton() {
    if(!disable && onClick){onClick()}
  }
  const clDisable = disable ? cl.disable: ""
  return(<>
    <button className={ClassNames([cl.button, clDisable])}
      onClick={onClickButton} disabled={disable}> 
      <div className={cl.text}>
        {text}
      </div>
    </button>
  </>)
}