import style from "./BasicContainer.less";
import concatClass from "../../utils/concatClass";

export default function (props) {
	return (
		<div class={concatClass(style.basiccontainer, props.class)}>
			{props.children}
		</div>
	);
}
