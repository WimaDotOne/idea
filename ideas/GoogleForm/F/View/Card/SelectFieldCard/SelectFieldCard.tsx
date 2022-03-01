import { SelectField } from "../../../H/Field/SelectField/SelectField"
import { Options } from "../../../../../Brand/GoogleForm/Model/Options"
import { SelectFieldError } from "../../../Model/SelectFieldError"
import { QuestionCardDiv } from "../../../H/QuestionCardDiv/QuestionCardDiv"

interface ISelectFieldCardProp {
  question: string
  options: Options
  value: string
  setValue: (value: string)=>void
  description?: string
  ghost?: string
  fieldError?: SelectFieldError
}
export function SelectFieldCard({
  question,
  options,
  value, setValue,
  description,
  ghost,
  fieldError
}: ISelectFieldCardProp) {

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
      <SelectField options={options} value={value} onChange={onChange}
        ghost={ghost}
      />
    </QuestionCardDiv>
  </>)
}