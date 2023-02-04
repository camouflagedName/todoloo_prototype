import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Layout } from './layout/layout'
import { useState } from 'react'
import { ToDoLayout } from './toDo/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [color, setColor] = useState('light');


  const switchMode = () => {
    if (darkMode) {
      setColor('light');
      setDarkMode(false);
    } else {
      setColor('dark');
      setDarkMode(true);
    }

  }


  return (
    <>
      <Head>
        <title>Todoloo Protoype</title>
        <meta name="description" content="prototype for todoloo web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout switchMode={switchMode} color={color}>
        <ToDoLayout />
      </Layout>
    </>
  )
}
