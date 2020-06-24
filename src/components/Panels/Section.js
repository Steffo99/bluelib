import Split from "../Layout/Split";
import {Fragment} from "preact";

export default function (props) {
    return (
        <Fragment>
            <h2>
                {props.title}
            </h2>
            <Split>
                {props.children}
            </Split>
        </Fragment>
    );
}
