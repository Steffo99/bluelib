import Split from "../Layout/Split";

export default function (props) {
    return (
        <div>
            <h2>
                {props.title}
            </h2>
            <Split>
                {props.children}
            </Split>
        </div>
    );
}
