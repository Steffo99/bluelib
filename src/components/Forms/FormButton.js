import ValidityStatus from "../Enums/ValidityStatus";
import FormRow from "./FormRow";
import style from "./FormRow.less"

export default function (props) {
	return (
		<FormRow validity={props.validity} label={props.label} icon={props.icon}>
			<button
				class={style.contentschild}
				onClick={(props.disabled && props.validity.validity === ValidityStatus.DISABLED) ? null : props.onClick}
				disabled={props.validity ? props.validity.validity === ValidityStatus.DISABLED : false}
			>
				{props.children}
			</button>
		</FormRow>
	);
}
