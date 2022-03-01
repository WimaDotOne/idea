import Head from 'next/head'
import { useRouter } from 'next/router'
import { Privacy } from '../../ideas/StripeLogin/Demo/Privacy'

export default function DemoPage() {

  const router = useRouter()
  function goTo() {
    router.push("/")
  }

  return (<>    
    <Privacy onClickLogo={goTo}/>
  </>
  )
}
