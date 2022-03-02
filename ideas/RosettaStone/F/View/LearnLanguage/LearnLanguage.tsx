import Head from 'next/head'
import { Div } from '../../../../Core/fCore'
import { SelectField } from '../../H/SelectField/SelectField'
import { Options } from '../../Model/Options'

export default function LearnLanguage() {

  const languageOptions = LanguageOptions()
  const unitOptions = UnitOptions()

  return (<>
    <Head>
      <title>Learn language</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    </Head>

    <Div padding={20}>
      <SelectField options={languageOptions}/>
    </Div>
    <Div padding={20}>
      <SelectField options={unitOptions}/>
    </Div>
  </>
  )
}

function UnitOptions() {
  const options = new Options()
  options.Add("1","Unit 1")
  options.Add("2","Unit 2")
  options.Add("3","Unit 3")
  options.Add("4","Unit 4")
  options.Add("5","Unit 5")
  options.Add("6","Unit 6")
  options.Add("7","Unit 7")
  options.Add("8","Unit 8")
  options.Add("9","Unit 9")
  options.Add("10","Unit 10")
  options.Add("11","Unit 11")
  options.Add("12","Unit 12")
  options.Add("13","Unit 13")
  options.Add("14","Unit 14")
  return options
}

function LanguageOptions() {
  const options = new Options(true) 

  const folder="/RosettaStone/img/Flag/"
  options.Add("de-DE", "German", folder+"germany.svg")
  options.Add("fr-FR", "French", folder+"france.svg")
  options.Add("zh-CN", "China", folder+"china.svg")
  options.Add("uk-UA", "Ukraine", folder+"ukraine.svg")

  return options
}