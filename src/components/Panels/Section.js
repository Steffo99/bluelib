import Split from "../Layout/Split";
import style from "./Section.less";

export default function (props) {
    return (
        <div>
            {props.title ?
                <h2 class={style.sectionTitle}>
                    {props.title}
                </h2>
            : null}
            <Split>
                {props.children}
            </Split>
        </div>
    );
}
