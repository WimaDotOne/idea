import cl from "./IntroText1.module.css"

interface IIntroText1Prop {
  header: string,
  text: string
}
export function IntroText1({
  header, text
}: IIntroText1Prop) {
  return(<>
    <div className={cl.introText}>
      <div className={cl.header}>{header}</div>
      <div className={cl.text}>{text}</div>
    </div>
  </>)
}