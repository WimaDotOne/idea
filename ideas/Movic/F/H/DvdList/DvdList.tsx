import { useEffect, useState } from "react"
import { Div, Pagination, Post2, useShield } from "../../../../Core/fCore"
import { IDvdPage } from "../../Model/IPage"
import { AppTurn } from "../../View/MovicApp/MovicApp"
import cl from "./DvdList.module.scss"
import { Dvd } from "./H/Dvd/Dvd"

interface IDvdListProp {
  setAppTurn: (appTurn: string)=>void
  setMovieId: (movieId: string)=>void
}
export function DvdList({
  setAppTurn,
  setMovieId
}: IDvdListProp) {

  const [page, setPage] = useState<number| string>(1)
  const [totalPage, setTotalPage] = useState<number|string>(1)
  const [pages, setPages] = useState<Array<IDvdPage>>([])
  
  const shield = useShield()

  async function LoadDvdList() {
    Post2(shield, "/movic/LoadDvdList", {
    }, (res)=>{
      const pages = res.pages
      if(!pages || !pages.length) return
      setPages(pages)
      setTotalPage(pages.length)
    })
  }

  function selectMovie(movieId: string) {
    setMovieId(movieId)
    setAppTurn(AppTurn.MovieBook)
  }
  useEffect(()=>{
    LoadDvdList()
  },[])

  const dvds = pages[+page-1] || []

  return(<>
  <div className={cl.dvdList}>
    <div className={cl.paginationDiv}>
      <Pagination page={page} setPage={setPage} totalPage={totalPage}/>
    </div>
    <div className={cl.dvds}>
      {
        dvds.map((dvd, i)=>{
          let url = ""
          if(dvd.illustration) {
            url = `/Movic/img/Illustration/Dvd/${dvd.illustration}`
          }
          return(
            <Dvd key={page+"-"+i} onClick={()=>{selectMovie(dvd.movieId)}}
              imageUrl={url}
            />)
        })
      }
    </div>
    <Div height={20} />
  </div>
  </>)
}