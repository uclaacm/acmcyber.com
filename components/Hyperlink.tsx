import styles from '@/styles/Hyperlink.module.scss';

import Tag from '@/components/Tag';

import ArchiveItem from './ArchiveItem';

interface prop {
    title: string;
    time: string
}

export default function Hyperlink(props: prop) {

    const handleclick = () => { 
        let list = document.querySelectorAll(`.${styles.list}>li`);
        if (list != null) {
                for(let i = 0; i < list.length; i++){
                var element: HTMLElement = (list[i] as HTMLElement);
                if (element.style.display === 'none') {
                    element.style.display = 'block'
                    element.style.height = '5em'
                } else {
                    element.style.display = 'none'
                    element.style.height = '0em'
                }
            }
        }
    }
    return (
        <div className={styles.main}>
        <h2 className={styles.time}>{props.time}</h2>
        <div className={styles.box} onClick={handleclick}>
            <h4>{props.title}</h4>
            <div className={styles.taglist}>
                <Tag name = "Reverse Engineering"/>
                <Tag name = "PWN"/>
            </div>     
        </div>
        <ul className={styles.list}>
                <li>
                    Example of information
                </li>
                <li>
                    Example of information2
                </li>
            </ul>
        </div>
    )

}