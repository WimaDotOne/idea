import { QuestionCardDiv } from "../../../H/QuestionCardDiv/QuestionCardDiv"
import { Checkbox } from "../../../H/Field/Checkbox/Checkbox"

interface ICheckboxCardProp {
  question: string
  name: string
  text: string
  checked: boolean
  setChecked: (checked: boolean)=>void
  description?: string
}

// A true or false question
export function CheckboxCard({
  question,
  name,
  text,
  checked,
  setChecked,
  description,
}: ICheckboxCardProp) {

  function onChange() {
    setChecked(!checked)
  }
  
  return(<>
    <QuestionCardDiv question={question} description={description}>
      <Checkbox name={name} text={text} onChange={onChange}/>
    </QuestionCardDiv>
  </>)
}