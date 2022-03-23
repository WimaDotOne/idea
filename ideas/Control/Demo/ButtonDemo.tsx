import Head from "next/head";
import { Alert, Div } from "../../Core/fCore";
import { Button1 } from "../fControl";

export function ButtonDemo() {

  function onClick() {
    Alert("Button clicked.")
  }

  return(<>
    <Head>
      <title>Buttons</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    </Head>
    <Div padding={10}>

      <Button1 text="Button 1" onClick={onClick} />
    </Div>
  </>)
}