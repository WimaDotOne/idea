import { useRef, useState } from "react"
import { TextArea } from "../../../H/Field/TextArea/TextArea"
import { TextFieldError } from "../../../Model/TextFieldError"
import { QuestionCardDiv } from "../../../H/QuestionCardDiv/QuestionCardDiv"

interface ITextAreaCardProp {
  question: string
  maxLength: number
  value: string
  setValue: (value: string)=>void
  description?: string
  ghost?: string
  fieldError?: TextFieldError
}
export function TextAreaCard({
  question,
  maxLength,
  value, setValue,
  description,
  ghost,
  fieldError
}: ITextAreaCardProp) {

  const [focus ,setFocus] = useState<boolean>(false)
  const isErrorVisibleRef = useRef<boolean>(false)

  function onChange(newValue: string) {
    if(fieldError) {
      fieldError.ResetRevealError()
      fieldError.UpdateError(newValue)
    }
    setValue(newValue)
  }

  function getError() {
    if(fieldError) {
      return fieldError.GetError(isErrorVisibleRef, value, focus)
    }
    return ""
  }

  return(<>
    <QuestionCardDiv question={question} description={description} error={getError()}>
      <TextArea value={value} 
        onChange={onChange}
        maxLength={maxLength}
        ghost={ghost}
        setFocus={setFocus}
      />
    </QuestionCardDiv>
  </>)
}