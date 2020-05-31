import Latex, {LatexDisplay} from "./Latex";

export default function (props) {
    return (
        <Latex inline={true} display={LatexDisplay.INLINE}>{props.children}</Latex>
    );
}
