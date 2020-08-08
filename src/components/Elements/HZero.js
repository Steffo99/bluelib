import style from "./HZero.less";
import concatClass from "../../utils/concatClass";

export default function (props) {
	return (
		<div class={concatClass(style.h0, props.class)}>
			{props.children}
		</div>
	);
}
