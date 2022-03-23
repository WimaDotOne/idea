import { useEffect, useState } from "react"
import { Button1 } from "../../../../Control/fControl"
import { Div, Pagination, Post2, useShield } from "../../../../Core/fCore"
import { SvgIcon } from "../../../../Svg/SvgIcon"
import { IMomentPage } from "../../Model/IPage"
import { AppTurn } from "../../View/MovicApp/MovicApp"
import { Moment } from "../Moment/Moment"
import cl from "./MovieBook.module.scss"

interface IMovieBookProp {
  movieId: string
  setAppTurn: (appTurn: string)=>void
}
export function MovieBook({
  movieId,
  setAppTurn
}: IMovieBookProp) {

  const [page, setPage] = useState<number| string>(1)
  const [totalPage, setTotalPage] = useState<number|string>(1)
  const [pages, setPages] = useState<Array<IMomentPage>>([])
  
  const shield = useShield()

  async function LoadMovie() {
    Post2(shield, "/movic/LoadMovie", {
      movieId
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
    LoadMovie()
  },[])

  useEffect(()=>{
    window.scrollTo(0,0)
  })

  const moments = pages[+page-1] || []

  return(<>
  <div className={cl.movieBook}>
    <div className={cl.homeDiv} onClick={()=>{setAppTurn(AppTurn.DvdList)}}>
      <SvgIcon name="home" width={24} color="#f7f7f7" />
    </div>
    <div className={cl.paginationDiv}>
      <Pagination page={page} setPage={setPage} totalPage={totalPage}/>
    </div>
    <div className={cl.moments}>
      {
        moments.map((moment, i)=>{
          let url = ""
          if(moment.illustration) {
            url = `/Movic/img/Illustration/Movie/${movieId}/${moment.illustration}`
          }
          return(
            <Moment key={page+"-"+i} narrative={moment.narrative}
              lines={moment.lines}
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