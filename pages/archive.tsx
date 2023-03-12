import styles from '@/styles/Archive.module.scss';
import Navbar from '@/components/Navbar';
import Hyperlink from '@/components/Hyperlink';

export default function Archive() {
    return (
        <>
        <Navbar />
        <main className={styles.main}>
            <h1>Archive</h1>
            <div className={styles.description}>
                <Hyperlink link = "https://www.google.com" name = "test" title = "Google"/>
            </div>
        </main>
        </>
    )
}