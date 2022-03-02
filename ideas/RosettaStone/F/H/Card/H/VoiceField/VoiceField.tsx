import { useState, useRef } from "react"
import { SvgIcon } from "../../../../../SVG/SvgIcon"
import { ClassNames } from "../../../../../Tool/ClassName"
import { color } from "../../../CSS/Color"
import { IsMatch } from "../../../Model/Match"
import { Recog } from "../../../Model/Recog"
import cl from "./VoiceField.module.scss"

interface IVoiceFieldProp {
  word: string,
  recog?: Recog
  setMatch: (match: boolean)=>void
}
export function VoiceField({
  word,
  recog,
  setMatch
}: IVoiceFieldProp) {

  const [text, setText] = useState<string>("")
  const [isRecording, setIsRecording] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)


  function onInputChange(newValue: string) {
    setText(newValue)
    if(IsMatch(word, newValue)) {
      setMatch(true)
      const input = inputRef.current
      if(input) {
        input.blur()
      }
    } else {
      setMatch(false)
    }
  }

  function onResult(result: string) {
    setText(result)
    if(IsMatch(word, result)) {
      setMatch(true)
    }
  }

  function onAudioStart() {
    setIsRecording(true)
  }

  function onAudioEnd() {
    setIsRecording(false)
  }

  function onClickMic() {
    const input = inputRef.current
    if(input) {
      input.focus()
    }
    if(recog && recog.canRecognize) {
      setText("")
      setMatch(false)
      recog.Recognize(word, onResult, onAudioStart, onAudioEnd)
    }
  }

  const noRecog = !recog || !recog.canRecognize
  
  const micColor = noRecog ? "#ccc" : color.speakerGreen
  const clNoRecog = noRecog ? cl.noRecog : ""
  
  return(<>
    <div className={cl.voiceFieldWrap}>
    <div className={cl.voiceField}>
      <input ref={inputRef}
        className={cl.input}
        value={text} 
        onChange={(e)=>{onInputChange(e.target.value)}}
      />
      <div className={ClassNames([cl.micDiv, clNoRecog])}
        title={recog?.info}
        onClick={onClickMic}>
        {
          isRecording ?
          <div className={cl.recording}>
            <div className={cl.recordingInner}>
              REC
            </div>
          </div>:
          <SvgIcon name="mic" width={20} color={micColor}/>
        }
      </div>
    </div>
    </div>
  </>)
}