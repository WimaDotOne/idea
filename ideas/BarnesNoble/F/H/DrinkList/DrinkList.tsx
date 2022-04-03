import { IDrink } from "../../Model/IDrink"
import { AppTurn } from "../../View/DrinksApp/DrinksApp"
import cl from "./DrinkList.module.scss"

interface IDrinkListProp {
  hotDrinks: Array<IDrink>
  coldDrinks: Array<IDrink>
  setAppTurn: (appTurn: string)=>void
  setDrink: (drink: IDrink)=>void
}

export function DrinkList({
  hotDrinks,
  coldDrinks,
  setAppTurn,
  setDrink
}: IDrinkListProp) {

  function selectDrink(drink: IDrink) {
    setDrink(drink)
    setAppTurn(AppTurn.Recipe)
  }

  return(<>
    <div className={cl.title}>Barnes &amp; Noble Barista</div>
    <div className={cl.hotDrinks}>
    {
      hotDrinks.map((drink, i)=> 
        <div key={drink.id} className={cl.drinkWrap} >
        <div className={cl.drink}
          onClick={()=>{selectDrink(drink)}}>
          {drink.code}
        </div>
        </div>
      )
    }
    </div>
    <div className={cl.coldDrinks}>
    {
      coldDrinks.map((drink, i)=> 
        <div key={drink.id} className={cl.drinkWrap} >
        <div className={cl.drink}
          onClick={()=>{selectDrink(drink)}}>
          {drink.code}
        </div>
        </div>
      )
    }
    </div>
  </>)
}