import style from "./HZero.less";
import {concatClass} from "../../index";

export default function (props) {
	return (
		<div class={concatClass(style.h0, props.class)}>
			{props.children}
		</div>
	);
}
