import Head from "next/head";
import { Tooltip } from "../F/View/Tooltip/Tooltip";
import { Div } from "../fCore";

export function TooltipDemo() {

  return(<>
    <Head>
      <title>Introtext</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    </Head>
    <Div height={100} />

    <Tooltip text="Hello">
      Hello aa sdfsdf
    </Tooltip>
    
  </>)
}