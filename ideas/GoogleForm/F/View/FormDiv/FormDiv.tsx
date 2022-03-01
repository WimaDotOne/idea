import { ReactNode } from "react"
import cl from "./FormDiv.module.scss"

interface IFormDivProp {
  children: ReactNode
}
export function FormDiv({
  children
}: IFormDivProp) {
  return(<>
    <div className={cl.formDiv}>
      <div className={cl.formInner}>
        {children}
      </div>
    </div>
  </>)
}