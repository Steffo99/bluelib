import style from "./BasicContainer.less";
import {concatClass} from "../../index";

export default function (props) {
	return (
		<div class={concatClass(style.basiccontainer, props.class)}>
			{props.children}
		</div>
	);
}
