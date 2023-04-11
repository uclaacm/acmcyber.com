import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar/>
    </>
  )
}
