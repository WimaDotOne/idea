import { useEffect, useRef } from "react"
import { ClassNames } from "../../../../Core/fCore"
import cl from "./Moment.module.scss"

interface IMomentProp {
  narrative: string
  lines: string[]
  imageUrl: string
}
export function Moment({
  narrative,
  lines,
  imageUrl
}: IMomentProp) {

  const imageDivRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const imageDiv = imageDivRef.current
    if(imageDiv) {
      imageDiv.style.height = imageDiv.clientWidth * 9/16 +"px"

      if(imageUrl) {
        imageDiv.style.backgroundImage = `url(${imageUrl})`
      }
    }
  })

  return(<>
    <div className={cl.cardWrap}>
    <div className={cl.card}>
      <div className={cl.narrative}>{narrative}</div>
      <div className={cl.image} 
        ref={imageDivRef}
      />
      {
        lines.length > 0 ?
        <div className={cl.lines}>
        {
          lines.map((line,i)=>
            <div key={i} 
              className={ClassNames([cl.line, i%2===0?cl.even:""])}
            >
              {line}
            </div>
          )
        }
        </div>:null
      }
      
    </div>
    </div>
  </>)
}