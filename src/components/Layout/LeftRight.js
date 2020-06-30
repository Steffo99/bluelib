import style from "./LeftRight.less";

export default function (props) {
	return (
		<div class={style.container}>
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
