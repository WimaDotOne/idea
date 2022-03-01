import { ReactNode } from "react";
import cl from "./FormTitleCard.module.scss";

interface IFormTitleCard {
  children: ReactNode
  title: string
}
export function FormTitleCard({
  children,
  title
}: IFormTitleCard) {
  return(<>
    <div className={cl.cardDiv}>
      <div className={cl.themeStripe}></div>
      <div className={cl.title}>
        {title}
      </div>
      <div className={cl.discription}>
        {children}
      </div>
    </div>
  </>)
}