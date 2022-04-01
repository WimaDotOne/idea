import { useEffect, useRef } from "react"
import { ClassNames } from "../../../../Core/fCore"
import cl from "./StepCard.module.scss"

interface IStepCardProp {
  optional?: boolean
  oneLine: string
  imageUrl: string
}
export function StepCard({
  optional,
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
  const clOptional = optional ? cl.optional :""
  return(<>
    <div className={cl.cardWrap}>
    <div className={ClassNames([cl.card, clOptional])}>
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