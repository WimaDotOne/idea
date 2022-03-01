import Head from 'next/head'
import { useRouter } from 'next/router'
import { Terms } from '../../ideas/StripeLogin/Demo/Terms'

export default function DemoPage() {

  const router = useRouter()
  function goTo() {
    router.push("/")
  }
  return (<>
    <Head>
      <title>Privacy</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    </Head>
    
    <Terms onClickLogo={goTo}/>
  </>
  )
}
