import Head from 'next/head'
import { useState } from 'react'
import { SpeechScript } from '../../../fRosettaStone'
import { Book } from '../../H/Book/Book'
import { Landing } from '../../H/Landing/Landing'
import { Lang } from '../../Model/Lang'

export default function LearnLanguage() {

  return (<>
    <Head>
      <title>Learn language</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    </Head>
    <SpeechScript />
    <App />
  </>
  )
}

function App() {
  const [appTurn, setAppTurn] = useState<string>(AppTurn.Landing)

  const [lang, setLang] = useState<string>(Lang.German)
  const [unit, setUnit] = useState<string>("1")

  switch(appTurn) {
    case AppTurn.Book: return(
      <Book lang={lang} unit={unit}
        setAppTurn={setAppTurn}/>
    )
    default: return(
      <Landing lang={lang} setLang={setLang}
        unit={unit} setUnit={setUnit}
        setAppTurn={setAppTurn}
      />)
  }
}

export const AppTurn = {
  Landing: "Landing",
  Book: "Book"
}

