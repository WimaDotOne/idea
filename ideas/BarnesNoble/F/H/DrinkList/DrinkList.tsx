import { useEffect, useState } from "react"
import { Div, Post2, useShield } from "../../../../Core/fCore"
import { IDrink } from "../../Model/IDrink"
import { AppTurn } from "../../View/DrinksApp/DrinksApp"
import cl from "./DrinkList.module.scss"

interface IDrinkListProp {
  setAppTurn: (appTurn: string)=>void
  setDrink: (drink: IDrink)=>void
}

export function DrinkList({
  setAppTurn,
  setDrink
}: IDrinkListProp) {

  const [hotDrinks, setHotDrinks] = useState<Array<IDrink>>([])
  const [coldDrinks, setColdDrinks] = useState<Array<IDrink>>([])
  const shield = useShield()

  function LoadDrinks() {
    Post2(shield, "/bn/LoadDrinks",{},
      (res)=>{
        setHotDrinks(res.hotDrinks)
        setColdDrinks(res.coldDrinks)
      }
    )
  }

  function selectDrink(drink: IDrink) {
    setDrink(drink)
    setAppTurn(AppTurn.Recipe)
  }

  useEffect(()=>{
    LoadDrinks()
  },[])

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