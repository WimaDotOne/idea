import { Div, LimitWidth } from "../../../../Core/fCore"
import { Wave } from "../../../../Fancy/fFancy"
import { IntroText1, IntroText2 } from "../../../../Landing/fLanding"
import { LanguageOptions, UnitOptions } from "../../Model/Settings"
import { AppTurn } from "../../View/LearnLanguage/LearnLanguage"
import { Button } from "../Button/Button"
import { SelectField } from "../SelectField/SelectField"
import cl from "./Landing.module.scss"

interface ILandingProp {
  lang: string,
  setLang: (lang:string)=>void
  unit: string
  setUnit: (unit:string)=>void
  setAppTurn: (appTurn: string)=>void
}
export function Landing({
  lang, setLang,
  unit, setUnit,
  setAppTurn
}: ILandingProp) {

  const langOptions = LanguageOptions()
  const unitOptions = UnitOptions(lang)

  function setLang2(newLang: string) {
    if(newLang !== lang) {
      setUnit("1")
    }
    setLang(newLang)
  }

  function onClickGo() {
    setAppTurn(AppTurn.Book)
  }

  return(<>
    <LimitWidth yellow>
      <Div height={25} />
      <IntroText1 header="Language for Beginners"
        text="Click speaker icon to listen. Click mic icon to read, or just type in the phrase" />
      <Div height={30} />
    </LimitWidth>
    <Wave />
    <Div height={30} />

    <div className={cl.selections}>
      <div className={cl.langDiv}>
        <SelectField value={lang} setValue={setLang2} options={langOptions} />
      </div>
      <div className={cl.unitDiv}>
        <SelectField value={unit} setValue={setUnit} options={unitOptions} />
      </div>
    </div>
    <div className={cl.goDiv}>
      <Button onClick={onClickGo} text="Start Learning ➽"/>
    </div>
    <Div height={40} />
    <LimitWidth gray>
      <Div height={30} />
      <IntroText2 header="Browser support"
        text1="Please use Chrome or Edge in a desktop to get the full speaking and reading functionality."
        text2="If the browser does not support voice recognition, you can still type in the phrase as a spelling practice." />
      <Div height={30} />
    </LimitWidth>
    <Div height={20} />
    <LimitWidth>
      <div className={cl.attributes}>
        <span>Photos by</span>  &nbsp; &nbsp;
        <a className={cl.vecteezy} target="_blank"
          href="https://www.vecteezy.com/free-photos" >
          Vecteezy
        </a> &nbsp; &nbsp;
        <a className={cl.freepik} target="_blank"
          href="https://www.freepik.com/" >
          Freepik
        </a> &nbsp; &nbsp;
      </div>

    </LimitWidth>
  </>)
}