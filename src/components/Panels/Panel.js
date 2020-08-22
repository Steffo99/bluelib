import Box from "./Box";
import Unmargin from "../Layout/Unmargin";


export default function(props) {
	return (
		<Box color={props.color} class={props.class}>
			<Unmargin>
				{props.title ?
					<h3>
						{props.title}
					</h3>
				: null}
				{props.children}
			</Unmargin>
		</Box>
	);
}
