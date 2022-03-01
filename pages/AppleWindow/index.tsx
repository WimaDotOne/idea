import Head from "next/head"
import { AppleWindowDemo } from "../../ideas/AppleWindow/Demo/AppleWindowDemo"

export default function DemoPage() {

  return(<>
    <Head>
      <title>Mac Window</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    </Head>
    
    <AppleWindowDemo />
  </>)
}