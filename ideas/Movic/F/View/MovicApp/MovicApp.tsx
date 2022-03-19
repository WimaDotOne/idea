import Head from 'next/head'
import { useState } from 'react'
import { MovieBook } from '../../H/MovieBook/MovieBook'
import { DvdList } from '../../H/DvdList/DvdList'

export default function MovicApp() {

  return (<>
    <Head>
      <title>Movic</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    </Head>
    <App />
  </>
  )
}

function App() {
  const [appTurn, setAppTurn] = useState<string>(AppTurn.DvdList)
  const [movieId, setMovieId] = useState<string>("IronMan1")

  switch(appTurn) {
    case AppTurn.MovieBook: return (
      <MovieBook movieId={movieId} setAppTurn={setAppTurn} />)
    default: return (
      <DvdList setMovieId={setMovieId} setAppTurn={setAppTurn}/>)
  }
}

export const AppTurn = {
  DvdList: "DvdList",
  MovieBook: "MovieBook"
}

