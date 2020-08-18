import style from "./Unmargin.less";

export default function(props) {
    return (
        <div class={style.unmargin}>
            {props.children}
        </div>
    )
}