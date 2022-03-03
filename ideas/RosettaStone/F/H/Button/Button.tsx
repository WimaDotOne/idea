import cl from "./Button.module.scss"

interface IButtonProp {
  text: string
  onClick: ()=>void
}
export function Button({
  text,
  onClick
}: IButtonProp) {
  return(<>
    <div className={cl.button}
      onClick={onClick}>
      <div className={cl.text}>
        {text}
      </div>
    </div>
  </>)
}