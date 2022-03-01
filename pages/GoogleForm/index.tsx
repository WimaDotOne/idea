import Head from 'next/head'
import { GoogleFormDemo } from '../../ideas/GoogleForm/Demo/GoogleFormDemo'

export default function DemoPage() {

  return (<>
    <Head>
      <title>Google Form</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    </Head>

    <GoogleFormDemo />
  
  </>
  )
}
