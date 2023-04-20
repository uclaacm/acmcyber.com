import styles from '@/styles/Tag.module.scss'
interface prop {
    name: string;
}

export default function Tag(props: prop) {
    return(
        <span className={styles.main}>
            {props.name}
        </span>
    )
}