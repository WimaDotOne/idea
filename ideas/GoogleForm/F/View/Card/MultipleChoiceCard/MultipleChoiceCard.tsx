import { Options } from "../../../Model/Options"
import { QuestionCardDiv } from "../../../H/QuestionCardDiv/QuestionCardDiv"
import { SelectFieldError } from "../../../Model/SelectFieldError"
import { MultipleChoice } from "../../../H/Field/MultipleChoice/MultipleChoice"

interface IMultipleChoiceCardProp {
  question: string
  name: string
  options: Options
  setValue: (value: string)=>void
  description?: string
  fieldError?: SelectFieldError
}
export function MultipleChoiceCard({
  question,
  name,
  options,
  setValue,
  description,
  fieldError
}: IMultipleChoiceCardProp) {

  function onChange(newValue: string) {
    if(fieldError) {
      fieldError.UpdateError(newValue)
    }
    setValue(newValue)
  }

  function getError() {
    if(fieldError) {
      return fieldError.GetError()
    }
    return ""
  }
  
  return(<>
    <QuestionCardDiv question={question} description={description} error={getError()}>
      <MultipleChoice name={name} options={options} onChange={onChange}/>
    </QuestionCardDiv>
  </>)
}