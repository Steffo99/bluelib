import style from "./TablePanel.less";

export default function (props) {
    return (
        <table class={style.tablepanel}>
            {props.children}
        </table>
    );
}
