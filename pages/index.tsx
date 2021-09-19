import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { Container, Row, Col, Link as NextUiLink } from '@nextui-org/react'
import  Link  from 'next/link'


const Home: NextPage = () => {
  const router = useRouter()
  const {t,lang} = useTranslation('common')


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>{t("greeting")}</h1>
      </main>

      <footer className={styles.footer}>
        <ul>
          {router.locales?.map((locale)=>(
            <li key={locale}>
               <Link href={router.asPath} locale={locale}> 
               <NextUiLink block color="success">{locale}</NextUiLink>
               </Link>
            </li>       
          ))}
        </ul>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("powered")}{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
