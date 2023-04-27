import Tag from "./Tag";

interface prop {
    title: string;
    tags: string[];
    link: string;
}

export default function ArchiveItem(props: prop) {
    return (
        <div>
            <h3>{props.title}</h3>
            <Tag name={props.tags[0]}/>
            <p>test test teset</p>
        </div>
    )
}