import { ReactNode, useRef } from "react"
import cl from "./QuestionCardDiv.module.scss"
import { color } from "../../CSS/Color"
import { SvgIcon } from "../../../../Svg/SvgIcon"
import { ClassNames } from "../../../../Core/fCore"

interface IQuestionCardDiv {
  children: ReactNode
  question: string
  error?: string
  description?: string
}
export function QuestionCardDiv({
  children,
  question,
  error,
  description
}: IQuestionCardDiv) {

  const clError = error ? cl.error : ""
  return(<>
    <div className={ClassNames([cl.cardDiv, clError])}>
      <div className={cl.question}>
      {question}
      {
        description ? 
        <div className={cl.description}>{description}</div>:null
      }
      </div>
      <div>{children}</div>
      {
        error ? 
        <div className={cl.errorDiv}>
          <div className={cl.errorSvgDiv}>
            <SvgIcon name="exclamation.circle" 
              width={22} strokeWidth={21} color={color.errorRed}/>
          </div>
          <div className={cl.errorMessage}>{error}</div>
        </div>:null
      }
    </div>
  </>)
}