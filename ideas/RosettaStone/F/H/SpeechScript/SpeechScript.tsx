import Script from "next/script"

declare global {
  interface Window {
      SpeechVoices: SpeechSynthesisVoice[]
  }
}

/*Script should be put at least one page load before it is needed or in a next page module
 otherwise strategy=beforeInteractive has no effect*/
export function SpeechScript() {

  // set window.SpeechVoices
  return(<>
    <Script 
      strategy="beforeInteractive"
      src="/js/speech.js"
    />
  </>)
}