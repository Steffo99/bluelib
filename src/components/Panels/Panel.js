import style from "./Panel.less";
import Box from "./Box";

export default function(props) {
	return (
		<Box color={props.color}>
			<h3 class={style.title}>
				{props.title}
			</h3>
			<div class={style.contents}>
				{props.children}
			</div>
		</Box>
	);
}
