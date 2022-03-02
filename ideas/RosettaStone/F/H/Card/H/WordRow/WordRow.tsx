import { ClassNames } from "../../../../../../Core/fCore"
import { Speaker } from "../../../../Model/Speaker"
import { SpeakButton } from "../SpeakButton/SpeakButton"
import cl from "./WordRow.module.scss"

interface IWordRowProp {
  word: string
  speaker?: Speaker
}
export function WordRow({
  word,
  speaker
}:IWordRowProp) {
  
  const wordStyle = WordStyle(word)
  const clSpeaker = speaker ? cl.speaker : ""

  return(<>
    <div className={ClassNames([cl.wordRow, clSpeaker])}>
      <div className={cl.word} style={wordStyle}>
        {word}
      </div>
      {
        speaker?
        <div className={cl.speakerDiv}>
          <SpeakButton text={word} speaker={speaker}/>
        </div>:null
      }
    </div>
  </>)
}

function WordStyle(word: string) {
  if(!word) return {}
  const len = word.length
  if(len < 20) return { fontSize: "24px"}
  if(len < 28) return { fontSize: "18px"}
  return { fontSize: "16px"}
}