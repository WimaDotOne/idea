import Head from "next/head"
import { Kevin3D } from "../fFancy"
import cl from "./Kevin3Demo.module.scss"

export function Kevin3Demo() {
  return(<>
  <Head>
    <title>3D</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
  </Head>
  
  <div className={cl.wrap}>
    <Kevin3D />
  </div>
  </>)
}