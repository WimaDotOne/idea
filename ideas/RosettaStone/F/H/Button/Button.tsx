import { ClassNames } from "../../../../Core/fCore"
import cl from "./Button.module.scss"

interface IButtonProp {
  text: string
  onClick: ()=>void
  disable?: boolean
}
export function Button({
  text,
  onClick,
  disable
}: IButtonProp) {

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