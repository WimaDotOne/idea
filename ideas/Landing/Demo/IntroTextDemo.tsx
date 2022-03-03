import Head from "next/head"
import { LimitWidth } from "../../Core/fCore"
import { IntroText1, IntroText2 } from "../fLanding"

export function IntroTextDemo() {
  return(<>
    <Head>
      <title>Introtext</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    </Head>
    
    <LimitWidth>
      <IntroText1 header="Meaningful App"
        text="This help make your life better"/>
    </LimitWidth>
    <LimitWidth gray>
      <IntroText2 header="Peace"
        text1="Be nice to others"
        text2="Open our mind" />
    </LimitWidth>
  </>)
}