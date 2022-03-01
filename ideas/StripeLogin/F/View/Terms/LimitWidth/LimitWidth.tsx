import { CSSProperties, ReactNode } from "react"
import { ClassNames } from "../../../../../Core/fCore"
import cl from "./LimitWidth.module.scss"

interface ILimitWidth {
  children: ReactNode
  gray?: boolean
  maxWidth?: number
}

export function LimitWidth({
  children, 
  gray,
  maxWidth
}: ILimitWidth) {

  const style: CSSProperties = {}
  if(maxWidth) {
    style.maxWidth = maxWidth + "px"
  }
  const clGray = gray ? cl.gray : ""
  return(<>
    <div className={ClassNames([cl.limitWidth, clGray])}>
      <div className={cl.limitWidthInner} style={style}>
        {children}
      </div>
    </div>
  </>)
}