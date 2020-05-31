import style from './Latex.less';
import {useContext} from "preact/hooks";
import LatexRenderColor from "../../contexts/LatexRenderColor";
import LatexDefaultInline from "../../contexts/LatexDefaultInline";

export default function(props) {
	// black, blue, brown, cyan, darkgray, gray, green, lightgray, lime, magenta, olive, orange, pink, purple, red, teal, violet, white, yellow
	let renderColor = useContext(LatexRenderColor);
	let defaultInline = useContext(LatexDefaultInline);

	let is_inline;
	if(props.inline === undefined) {
		is_inline = defaultInline;
	}
	else {
		is_inline = props.inline;
	}

	if(is_inline) {
		let equation = `\\inline {\\color{${renderColor}} ${props.children} }`;
		return (
			<img src={`https://latex.codecogs.com/svg.latex?${equation}`}
				 alt={props.children}
				 title={props.children}
				 class={style.latex + " " + style.inline}
			/>
		);
	}
	else {
		let equation = `{\\color{${renderColor}} ${props.children} }`;
		return (
			<img src={`https://latex.codecogs.com/svg.latex?${equation}`}
				 alt={props.children}
				 title={props.children}
				 class={style.latex + " " + style.block}
			/>
		);
	}
}
