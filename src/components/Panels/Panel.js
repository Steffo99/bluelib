import Box from "./Box";

export default function(props) {
	return (
		<Box color={props.color} class={props.class}>
			<h3>
				{props.title}
			</h3>
			<div>
				{props.children}
			</div>
		</Box>
	);
}
