import style from "./LeftRight.less";
import concatClass from "../../utils/concatClass";

export default function (props) {
	return (
		<div class={concatClass(style.container, props.class)}>
			<div class={style.left}>
				{props.left}
			</div>
			<div class={style.center}>
				{props.center}
			</div>
			<div class={style.right}>
				{props.right}
			</div>
		</div>
	);
}
