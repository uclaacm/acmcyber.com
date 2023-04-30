import Image from 'next/image'
import Navbar from '../components/Navbar'
import HomeBanner from '@/public/images/HomeBanner.svg';
import Footer from '../components/Footer';
import { CSSProperties } from 'react';

import ButtonLink, { getPagePaths } from '../components/ButtonLink';
import { useRouter } from 'next/router';

const bannerStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: "auto",
  objectFit: "contain"
};

export default function homePage() {
  // const router = useRouter();
  // const basePath = router.pathname.split('/')[1];
  // const aboutPath = `${basePath}/about`;
  console.log(getPagePaths('/'));
  return (
    <>
      {/* <ButtonLink href={aboutPath}>
        Hello
      </ButtonLink> */}
      <Navbar/>
      <Image src={HomeBanner} style={bannerStyle} alt="ACM CYBER" />
      <h1>WELCOME TO ACM CYBER!</h1>
      <p>Our mission is to create a community in which both experts and beginners alike can grow in the field of cybersecurity skills and knowledge. We want to make cybersecurity simple and accessible for everyone. 
        Cybersecurity sounds hard. We get it. Throughout each quarter, we hold workshops geared towards both novices and hobbyists curious about the world of cybersecurity, covering topics such as forensics, web hacking, cryptography, and reverse engineering. We also hold Capture The Flag (CTF) competitions in which teams participate collaboratively to solve cybersecurity challenges. Our events are open to anyone and everyone, even if you have no experience whatsoever!</p>
      <Footer />
    </>
  )
}
