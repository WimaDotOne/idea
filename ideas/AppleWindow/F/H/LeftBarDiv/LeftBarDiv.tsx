import { ReactNode } from "react"
import { ClassNames, Scrollable } from "../../../../Core/fCore"
import cl from "./LeftBarDiv.module.scss"

interface ILeftBarDivProp {
  children: ReactNode,
  open?: boolean
  brand?: string
}
export function LeftBarDiv({
  children,
  open,
  brand
}: ILeftBarDivProp) {
  const clOpen = open ? cl.open : ""
  return(<>
    <div className={ClassNames([cl.leftBar, clOpen])}>
      <div className={cl.menuDiv}>
        <Scrollable>
          {children}
          <div className={cl.bottomBarSpaceFill}></div>
        </Scrollable>
      </div>
      <div className={ClassNames([cl.bottomBar, clOpen])}>
        <div className={cl.brand}>{brand}</div>
      </div>
    </div>
  </>)
}