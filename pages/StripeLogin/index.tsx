import Head from 'next/head'
import { StripeLoginDemo } from '../../ideas/StripeLogin/Demo/StripeLoginDemo'

export default function DemoPage() {

  return (<>
    <Head>
      <title>Stripe Login</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    </Head>
    
    <StripeLoginDemo />
  </>
  )
}
