import styles from '@/styles/Hyperlink.module.scss';


interface prop {
    link: string;
    name: string;
    title: string
}

export default function Hyperlink(props: prop) {

    return (
        <div className={styles.main}>
        <h2 className={styles.title}>{props.title}</h2>
        <div className={styles.box}>
            <a href = {props.link}>{props.name}</a>
        </div>
        </div>
    )

}