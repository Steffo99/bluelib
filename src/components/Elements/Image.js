export default function(props) {
    return (
        <a href={props.src} title={props.alt} target={"_blank"}><img src={props.src} alt={props.alt}/></a>
    )
}
