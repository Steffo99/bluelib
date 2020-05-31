import Latex from "./Latex";

export default function (props) {
    return (
        <Latex inline={true}>{props.children}</Latex>
    );
}
