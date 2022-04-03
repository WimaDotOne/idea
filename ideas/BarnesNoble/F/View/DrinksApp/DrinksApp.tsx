import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Recipe } from '../../H/Recipe/Recipe'
import { DrinkList } from '../../H/DrinkList/DrinkList'
import { IDrink } from '../../Model/IDrink'
import { Post2, useShield } from '../../../../Core/fCore'

export default function BarnesNobleApp() {

  return (<>
    <Head>
      <title>Barnes &amp; Noble</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    </Head>
    <App />
  </>
  )
}

function App() {
  const [appTurn, setAppTurn] = useState<string>(AppTurn.DrinkList)
  const [drink, setDrink] = useState<IDrink>()

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

  useEffect(()=>{
    LoadDrinks()
  },[])
  
  switch(appTurn) {
    case AppTurn.Recipe: return (
      <Recipe drink={drink} setAppTurn={setAppTurn} />)
    default: return (
      <DrinkList 
        hotDrinks={hotDrinks} coldDrinks={coldDrinks}
        setDrink={setDrink} setAppTurn={setAppTurn}/>)
  }
}

export const AppTurn = {
  DrinkList: "DrinkList",
  Recipe: "Recipe"
}

