import style from "./Split.less";

export default function (props) {
    let children;

    if(Array.isArray(props.children)) {
        children = props.children.map(element => {
            console.log(element);
            return (
                <div class={style.splitchild}>
                    {element}
                </div>
            );
        });
    }

    else {
        children = (
            <div class={style.splitchild}>
                {props.children}
            </div>
        );
    }
    return (
        <div class={style.split}>
            <div class={style.splitparent}>{children}</div>
        </div>
    );
}
