import Latex from "./Latex";

export default function (props) {
    return (
        <Latex inline={false}>{props.children}</Latex>
    );
}
