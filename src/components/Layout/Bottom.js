import style from "./Bottom.less";

export default function(props) {
    return (
        <div class={style.bottom}>
            {props.children}
        </div>
    )
}
