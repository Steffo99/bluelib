import Latex, {LatexDisplay} from "./Latex";

export default function (props) {
    return (
        <Latex inline={false} display={LatexDisplay.BLOCK}>{props.children}</Latex>
    );
}
