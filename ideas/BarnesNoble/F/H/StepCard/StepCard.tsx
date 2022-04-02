import { useEffect, useRef } from "react"
import { ClassNames } from "../../../../Core/fCore"
import cl from "./StepCard.module.scss"

interface IStepCardProp {
  hot?: boolean
  optional?: boolean
  oneLine: string
  imageUrl: string
}
export function StepCard({
  hot,
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
  const clHot = hot ? cl.hot: ""
  return(<>
    <div className={cl.cardWrap}>
    <div className={ClassNames([cl.card, clOptional, clHot])}>
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