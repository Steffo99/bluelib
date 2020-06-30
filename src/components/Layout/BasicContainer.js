import style from "./BasicContainer.less";

export default function (props) {
	return (
		<div class={style.basiccontainer}>
			{props.children}
		</div>
	);
}
