export default function(props) {
    return (
        <a href={props.src} title={props.alt} target={"_blank"} class={props.aClass}>
            <img src={props.src} alt={props.alt} class={props.imgClass}/>
        </a>
    )
}
