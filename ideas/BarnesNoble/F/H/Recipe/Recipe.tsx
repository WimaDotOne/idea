import { SvgIcon } from "../../../../Svg/SvgIcon"
import { IDrink } from "../../Model/IDrink"
import { AppTurn } from "../../View/DrinksApp/DrinksApp"
import { StepCard } from "../StepCard/StepCard"
import cl from "./Recipe.module.scss"

interface IRecipeProp {
  drink?: IDrink
  setAppTurn: (appTurn: string)=>void
}

export function Recipe({
  drink,
  setAppTurn
}: IRecipeProp) {
  console.log(drink)
  if(!drink) {
    return null
  }
  function goToDrinkList() {
    setAppTurn(AppTurn.DrinkList)
  }
  return(<>
    <div className={cl.topBar}>
      <div className={cl.homeDiv} onClick={goToDrinkList}>
      <SvgIcon name="home" width={30} color="lightblue" />
      </div>
      <div className={cl.drinkName}>{drink.name} ({drink.code})</div>
    </div>
    <div className={cl.steps}>
    {
      drink.steps.map((step, i)=>{
        const url = `/BarnesNoble/Steps/${step.illustration}`
        return (<StepCard key={i} oneLine={step.oneLine}
          imageUrl={url} />)
      }

      )
    }
    </div>

  </>)
}