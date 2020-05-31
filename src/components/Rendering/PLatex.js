import BLatex from "./BLatex";

export default function (props) {
    return (
        <p>
            <BLatex>{props.children}</BLatex>
        </p>
    );
}
