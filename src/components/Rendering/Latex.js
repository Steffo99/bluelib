import style from './Latex.less';
import {useContext} from "preact/hooks";
import LatexRenderColor from "../../contexts/LatexRenderColor";
import LatexDefaultInline from "../../contexts/LatexDefaultInline";
import LatexDefaultDisplay from "../../contexts/LatexDefaultDisplay";
import stripTabs from "../../utils/stripTabs";

export const LatexDisplay = Object.freeze({
    INLINE: style.inline,
    BLOCK: style.block,
})

export default function(props) {
    // black, blue, brown, cyan, darkgray, gray, green, lightgray, lime, magenta, olive, orange, pink, purple, red, teal, violet, white, yellow
    let renderColor = useContext(LatexRenderColor);
    let defaultInline = useContext(LatexDefaultInline);
    let defaultDisplay = useContext(LatexDefaultDisplay);

    let inline;
    if(props.inline === undefined) {
        inline = defaultInline;
    }
    else {
        inline = props.inline;
    }

    let display;
    if(props.display === undefined) {
        if(defaultDisplay === null) {
            display = LatexDisplay.INLINE;
        }
        else {
            display = defaultDisplay;
        }
    }
    else {
        display = props.display;
    }

    let contents = stripTabs(props.children);

    if(inline) {
        let equation = `\\inline {\\color{${renderColor}} ${contents} }`;
        return (
            <img src={`https://latex.codecogs.com/svg.latex?${equation}`}
                 alt={contents}
                 title={contents}
                 class={concatClass(style.latex, display, props.class)}
            />
        );
    }
    else {
        let equation = `{\\color{${renderColor}} ${contents} }`;
        return (
            <img src={`https://latex.codecogs.com/svg.latex?${equation}`}
                 alt={contents}
                 title={contents}
                 class={concatClass(style.latex, display, props.class)}
            />
        );
    }
}
