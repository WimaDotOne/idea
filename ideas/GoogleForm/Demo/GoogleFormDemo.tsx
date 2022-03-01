import { useState } from "react"
import { CheckboxCard, FormDiv, FormTitleCard, MultipleChoiceCard, Options, SelectFieldCard, SelectFieldError, TextAreaCard, TextFieldCard, TextFieldError } from "../fGoogleForm"

export function GoogleFormDemo() {

  const [ans1, setAns1] = useState<string>("")
  const [err1, setErr1] = useState<string>("")
  const [ans2, setAns2] = useState<string>("")
  const [err2, setErr2] = useState<string>("")
  const [ans3, setAns3] = useState<string>("")
  const [err3, setErr3] = useState<string>("")
  const [ans4, setAns4] = useState<string>("")
  const [err4, setErr4] = useState<string>("")
  const [awesome5, setAwesome5] = useState<boolean>(false)
  const [revealError, setRevealError] = useState<boolean>(false)

  function validate1(val: string): string{
    if(val.includes("xxx")) return "containing xxx"
    if(val.includes("yyy")) return "Yyy is there"
    return ""
  }


  const fieldError1 = new TextFieldError({
    error: err1,
    setError: setErr1,
    revealError, setRevealError,
    validate: validate1
  })
  const fieldError2 = new TextFieldError({
    error: err2,
    setError: setErr2,
    revealError, setRevealError,
    required: true
  })
  const fieldError3 = new SelectFieldError({
    error: err3,
    setError: setErr3,
    validate: validate1,
    required: true
  })
  const fieldError4 = new SelectFieldError({
    error: err4,
    setError: setErr4,
    validate: validate1,
    required: true
  })

  const options = new Options()
  options.Add("1", "Money Bob")
  options.Add("2", "Steve Job")
  options.Add("3", "Steve Wozniak")
  options.Add("xxx", "Bob Dylan ni zhe gai si de wen rou rang wo xin zai tong lei zai liu")

  return(<>
    <FormDiv>
      <FormTitleCard title="Form title and it can be long and wrap let's see">
        The desicription is nice and short but it conveys what it wants to say.
      </FormTitleCard>
      <TextFieldCard question="What's your name?" ghost="Your answer" maxLength={50}
        value={ans1} setValue={setAns1} fieldError={fieldError1}/>
      <TextAreaCard question="About me" ghost="Your answer"
        maxLength={100} fieldError={fieldError2}
        value={ans2} setValue={setAns2} description="description"/>
      <SelectFieldCard question="Which is better" fieldError={fieldError3}
        options={options}
        value={ans3} setValue={setAns3} ghost="Choose"/>
      <MultipleChoiceCard name="univaff" fieldError={fieldError4}
        question="University Affiliation" description="well"
        options={options} setValue={setAns4}/>
      <CheckboxCard name="awesome5" question="Awesomeness" checked={awesome5}
        setChecked={setAwesome5} text="I'm awesome"/>
    </FormDiv>
  </>)
}