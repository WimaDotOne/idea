import { ReactNode } from "react"
import cl from "./PageDiv.module.scss"

interface IPageDivProp {
  children: ReactNode
}
export function PageDiv({children}:IPageDivProp) {
  return(<>
    <div className={cl.page}>
      {children}
    </div>
  </>)
}