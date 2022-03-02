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
  recog?: Recog
  speaker?: Speaker
  imageUrl?: string
}
export function RepeatCard({
  word,
  translate,
  recog,
  speaker,
  imageUrl
}:IRepeatCardProp) {

  const [match, setMatch] = useState<boolean>(false)

  useEffect(()=>{
   
  }, [match])

  return(<>
    <CardDiv>
      <WordRow word={word} speaker={speaker}/>
      <VoiceField recog={recog}
        word={word} setMatch={setMatch}/>
      <Div height={10} />
      <Illustration imageUrl={imageUrl} translate={translate} />
      {
        match ? <CheckMark />:null
      }
      
    </CardDiv>
  </>)
}