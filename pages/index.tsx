import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Div } from '../ideas/Core/fCore'
import cl from "./index.module.scss"

const Home: NextPage = () => {
  return (<>
    <Head>
      <title>Ideas</title>
      <meta name="description" content="Web app ideas" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <Div padding={20} paddingTop={0}>
      <h3>Sketchbook</h3>
      <div className={cl.links}>
      <Link href="/AppleWindow"><a>Apple Window</a></Link> &nbsp;&nbsp;
      <Link href="/GoogleForm"><a>Google Form</a></Link> &nbsp;&nbsp;
      <Link href="/StripeLogin"><a>Stripe Login</a></Link> &nbsp;&nbsp;
      <Link href="/StripeLogin/Privacy"><a>Privacy</a></Link> &nbsp;&nbsp;
      <Link href="/StripeLogin/Terms"><a>Terms</a></Link> &nbsp;&nbsp;
      <Link href="/StripeLogin/Contact"><a>Contact</a></Link> &nbsp;&nbsp;
      </div>
      <Div height={20} />
      <h3>Ideas</h3>
      <div className={cl.links}>
      <Link href="/RosettaStone"><a>Rosetta Stone</a></Link> &nbsp;&nbsp;
      </div>
   </Div>
  </>)
}

export default Home
