import cl from "./IntroText2.module.css"

interface IIntroText2Prop {
  header: string,
  text1: string,
  text2: string
}

export function IntroText2({
  header, text1, text2
}: IIntroText2Prop) {
  return(<>
    <div className={cl.introText}>
      <div className={cl.header}>{header}</div>
      <div></div>
      <div className={cl.text}>{text1}</div>
      <div className={cl.text}>{text2}</div>
    </div>
  </>)
}