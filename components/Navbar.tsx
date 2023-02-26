import styles from '@/styles/Navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image';

import CyberLogoLight from '@/public/Images/cyber-logo-light.png';
import CyberWordmarkLight from '@/public/Images/cyber-wordmark-light.png';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
        
        {/* LEFT PART OF THE NAVBAR */}
         <div className="Left">
            <button style={{all: "unset"}}> {/* TODO: Add onClick() action to go to home page */}
                <Image src={CyberLogoLight} alt="ACM ACYBER"/>
                <Image src={CyberWordmarkLight} alt=""/>
            </button>
         </div>
        
        {/* SPACER */}
         <div className={styles.spacer}/> 

        {/* RIGHT PART OF THE NAVBAR */}
         <div className="Right">
             <Link href="/events">EVENTS</Link>
             <Link href="/challenges">ABOUT</Link>
             <Link href="/scoreboard">PBR</Link>
             <Link href="/login">ARCHIVE</Link>
         </div>
   </div>
    )
}