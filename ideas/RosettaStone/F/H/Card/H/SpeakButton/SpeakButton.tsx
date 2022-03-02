import { SvgIcon } from "../../../../../SVG/SvgIcon"
import { ClassNames } from "../../../../../Tool/ClassName"
import { Speaker } from "../../../Model/Speaker"
import cl from "./SpeakButton.module.scss"

interface ISpeakButtonProp {
  text: string
  speaker?: Speaker
}
export function SpeakButton({
  text,
  speaker
}: ISpeakButtonProp) {
  const disable = !speaker || !speaker.canSpeak

  const clDisable = disable ? cl.disable:""

  function speak() {
    if(disable) return
    speaker.Speak(text)
  }
  return(<>
    <div className={ClassNames([cl.audioDiv, clDisable])}
      onClick={speak} title={speaker?.info}>
      <SvgIcon name="audio" width={15} color="white" />
    </div>
  </>)
}