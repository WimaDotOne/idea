import { Speaker } from "../../../Model/Speaker"
import { useEffect, useState } from "react"
import { Recog } from "../../../Model/Recog"
import { CardDiv } from "../H/CardDiv/CardDiv"
import { WordRow } from "../H/WordRow/WordRow"
import { VoiceField } from "../H/VoiceField/VoiceField"
import { Div } from "../../../../../Core/fCore"
import { Illustration } from "../H/Illustration/Illustration"
import { CheckMark } from "../H/CheckMark/CheckMark"

interface IRepeatCardProp {
  word: string
  translate: string
  lang: string
  imageUrl?: string
}
export function RepeatCard({
  word,
  translate,
  lang,
  imageUrl
}:IRepeatCardProp) {

  const [match, setMatch] = useState<boolean>(false)

  useEffect(()=>{
   
  }, [match])

  return(<>
    <CardDiv>
      <WordRow word={word} speaker lang={lang}/>
      <VoiceField lang={lang}
        word={word} setMatch={setMatch}/>
      <Div height={10} />
      <Illustration imageUrl={imageUrl} translate={translate} />
      {
        match ? <CheckMark />:null
      }
      
    </CardDiv>
  </>)
}