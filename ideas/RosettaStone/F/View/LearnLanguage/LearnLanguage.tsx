import Head from 'next/head'
import { useState } from 'react'
import { Landing } from '../../H/Landing/Landing'
import { NavBar } from '../../H/NavBar/NavBar'
import { Lang } from '../../Model/Lang'
import { IOption } from '../../Model/Options'
import { LanguageOptions, UnitOptions } from '../../Model/Settings'

export default function LearnLanguage() {

  return (<>
    <Head>
      <title>Learn language</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    </Head>

    <App />
  </>
  )
}

function App() {
  const [appTurn, setAppTurn] = useState<string>(AppTurn.Landing)

  const [lang, setLang] = useState<string>(Lang.German)
  const [unit, setUnit] = useState<string>("1")

  switch(appTurn) {
    default: return(
      <Landing lang={lang} setLang={setLang}
        unit={unit} setUnit={setUnit}
      />)
  }
}

export const AppTurn = {
  Landing: "Landing",
  Learning: "Learning"
}

