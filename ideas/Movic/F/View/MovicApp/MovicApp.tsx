import Head from 'next/head'
import { useState } from 'react'
import { MovieBook } from '../../H/MovieBook/MovieBook'
import { MovieList } from '../../H/MovieList/MovieList'

export default function MovicApp() {

  return (<>
    <Head>
      <title>Learn language</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    </Head>
    <App />
  </>
  )
}

function App() {
  const [appTurn, setAppTurn] = useState<string>(AppTurn.MovieBook)

  switch(appTurn) {
    case AppTurn.MovieBook: return (<MovieBook />)
    default: return (<MovieList />)
  }
}

export const AppTurn = {
  MovieList: "MovieList",
  MovieBook: "MovieBook"
}

