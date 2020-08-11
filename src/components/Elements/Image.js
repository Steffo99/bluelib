import style from "./Image.less";
import {concatClass} from "../../index";

export default function(props) {
    return (
        <a href={props.src} title={props.alt} target={"_blank"} class={props.aClass}>
            <img src={props.src} alt={props.alt} class={concatClass(style.img, props.imgClass)}/>
        </a>
    )
}
