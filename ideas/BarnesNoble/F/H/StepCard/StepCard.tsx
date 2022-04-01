import { useEffect, useRef } from "react"
import cl from "./StepCard.module.scss"

interface IStepCardProp {
  oneLine: string
  imageUrl: string
}
export function StepCard({
  oneLine,
  imageUrl
}: IStepCardProp) {

  const imageDivRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const imageDiv = imageDivRef.current
    if(imageDiv) {
      imageDiv.style.height = imageDiv.clientWidth +"px"

      if(imageUrl) {
        imageDiv.style.backgroundImage = `url(${imageUrl})`
      }
    }
  })

  return(<>
    <div className={cl.cardWrap}>
    <div className={cl.card}>
      <div className={cl.image} 
        ref={imageDivRef}
      />
      <div className={cl.oneLine}>
        {oneLine}
      </div>
    </div>
    </div>
  </>)
}