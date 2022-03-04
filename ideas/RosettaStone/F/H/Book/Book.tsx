import { useEffect, useState } from "react"
import { LimitWidth, Pagination, Post2, useShield } from "../../../../Core/fCore"
import { IPage } from "../../Model/IPage"
import { RepeatCard } from "../Card/RepeatCard/RepeatCard"
import cl from "./Book.module.scss"

interface IBookProp {
  lang: string
  unit: string | number
}
export function Book({
  lang,
  unit
}: IBookProp) {

  const [page, setPage] = useState< number| string>(1)
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

  useEffect(()=>{
    LoadWords()
  },[])

  const words = pages[+page-1] || []
  return(<>
  <div className={cl.book}>
    <div className={cl.paginationDiv}>
      <Pagination page={page} setPage={setPage} totalPage={totalPage}/>
    </div>

    <div className={cl.words}>
      {
        words.map((word, i)=>{
          let url = ""
          if(word.illustration) {
            url = `/RosettaStone/img/Illustration/Unit${unit}/${word.illustration}`
          }
          return(<>
          <RepeatCard key={i}
            word={word.word} 
            translate={word.translate}
            imageUrl={url}
          />
          </>)
        })
      }
    </div>
  </div>
  </>)
}