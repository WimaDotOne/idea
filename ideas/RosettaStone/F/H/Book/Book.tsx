import { useEffect, useState } from "react"
import { Button1 } from "../../../../Control/fControl"
import { Div, HLine, LimitWidth, Pagination, Post2, useShield } from "../../../../Core/fCore"
import { SvgIcon } from "../../../../Svg/SvgIcon"
import { IPage } from "../../Model/IPage"
import { AppTurn } from "../../View/LearnLanguage/LearnLanguage"
import { RepeatCard } from "../Card/RepeatCard/RepeatCard"
import { Keyboard } from "../Keyboard/Keyboard"
import cl from "./Book.module.scss"

interface IBookProp {
  lang: string
  unit: string | number
  setAppTurn: (appTurn: string)=>void
}
export function Book({
  lang,
  unit,
  setAppTurn
}: IBookProp) {

  const [page, setPage] = useState<number| string>(1)
  const [totalPage, setTotalPage] = useState<number|string>(1)
  const [pages, setPages] = useState<Array<IPage>>([])
  
  const shield = useShield()

  async function LoadWords() {
    Post2(shield, "/rosettastone/LoadWords", {
      lang, 
      unit
    }, (res)=>{
      const pages = res.pages
      if(!pages || !pages.length) return
      setPages(pages)
      setTotalPage(pages.length)
    })
  }

  function next() {
    if(page < totalPage) {
      setPage(+page+1)
    }
  }

  useEffect(()=>{
    LoadWords()
  },[])

  const words = pages[+page-1] || []

  return(<>
  <div className={cl.book}>
    <div className={cl.homeDiv} onClick={()=>{setAppTurn(AppTurn.Landing)}}>
      <SvgIcon name="home" width={24} color="#f7f7f7" />
    </div>
    <div className={cl.paginationDiv}>
      <Pagination page={page} setPage={setPage} totalPage={totalPage}/>
    </div>
    <div className={cl.keyboardDiv}>
      <Keyboard lang={lang} />
    </div>
    <div className={cl.words}>
      {
        words.map((word, i)=>{
          let url = ""
          if(word.illustration) {
            url = `/RosettaStone/img/Illustration/Unit${unit}/${word.illustration}`
          }
          return(
          <RepeatCard key={page+"-"+i}
            autoFocus={i===0}
            lang={lang}
            word={word.word} 
            translate={word.translate}
            imageUrl={url}
          />)
        })
      }
    </div>
    <Div height={20} />
    <div className={cl.buttonDiv}>
      {
        page < totalPage ? 
        <Button1 text=">" onClick={next}/>
        :null
      }
    </div>
    <Div height={20} />
  </div>
  </>)
}