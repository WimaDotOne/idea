import { useState } from "react"
import { Lang } from "../../Model/Lang"
import { Options } from "../../Model/Options"
import { LanguageOptions, UnitOptions } from "../../Model/Settings"
import { SelectField } from "../SelectField/SelectField"
import cl from "./NavBar.module.scss"

export function NavBar() {

  const languageOptions = LanguageOptions()
  const [lang, setLang] = useState<string>(languageOptions.array[0].value)

  const unitOptions = UnitOptions(lang)

  return(<>
    <div className={cl.navBar}>
      <div className={cl.selectLang}>
        <SelectField options={languageOptions} />
      </div>
      <div className={cl.selectUnit}>
        <SelectField options={unitOptions} />
      </div>
    </div>
  </>)
}

