import { useState, useRef } from "react"
import { TextField } from "../../../H/Field/TextField/TextField"
import { TextFieldError } from "../../../Model/TextFieldError"
import { QuestionCardDiv } from "../../../H/QuestionCardDiv/QuestionCardDiv"

interface ITextFieldCardProp {
  question: string
  maxLength: number
  description?: string
  ghost?: string
  value: string
  setValue: (value: string)=>void

  fieldError?: TextFieldError
}
export function TextFieldCard({
  question,
  description,
  ghost,
  maxLength,
  value, setValue,
  fieldError
}: ITextFieldCardProp) {

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
      <TextField ghost={ghost} value={value} onChange={onChange} setFocus={setFocus}
        maxLength={maxLength}/>
    </QuestionCardDiv>
  </>)
}