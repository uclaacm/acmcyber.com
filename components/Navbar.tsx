import styles from '@/styles/Navbar.module.scss'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
         <div className="Left">
             <Link href="/" className="navBarTitle">ACM CYBER</Link>
         </div>

         <div className={styles.spacer}/> 

         <div className="Right">
             <Link href="/events" className={styles.navbarChildren}>Events</Link>
             <Link href="/challenges" className={styles.navbarChildren}>Challenges</Link>
             <Link href="/scoreboard" className={styles.navbarChildren}>Scoreboard</Link>
             <Link href="/login" className={styles.navbarChildren}>Login</Link>
             <button className={styles.navbarChildren + " " + styles.registerButton}>
                <p>Register</p>
             </button>
         </div>
   </div>
    )
}