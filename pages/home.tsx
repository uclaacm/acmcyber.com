import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Navbar from '../components/Navbar'
import HomeBanner from '@/public/Images/HomeBanner.svg';

const bannerStyle = {
  position: 'relative',
  width: '100vw'
};

export default function homePage() {
  return (
    <>
      <Navbar/>
      <Image src={HomeBanner} alt="ACM ACYBER" style={bannerStyle}/>
      <h1>WELCOME TO ACM CYBER!</h1>
      <p>Our mission is to create a community in which both experts and beginners alike can grow in the field of cybersecurity skills and knowledge. We want to make cybersecurity simple and accessible for everyone. 
        Cybersecurity sounds hard. We get it. Throughout each quarter, we hold workshops geared towards both novices and hobbyists curious about the world of cybersecurity, covering topics such as forensics, web hacking, cryptography, and reverse engineering. We also hold Capture The Flag (CTF) competitions in which teams participate collaboratively to solve cybersecurity challenges. Our events are open to anyone and everyone, even if you have no experience whatsoever!</p>
    </>
  )
}
