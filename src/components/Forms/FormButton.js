import ValidityStatus from "../../enums/Validity";
import FormRow from "./FormRow";
import style from "./FormRow.less";
import concatClass from "../../utils/concatClass";
import theme from "../../styles/theme.less";

export default function (props) {
	return (
		<FormRow
			disabled={props.disabled}
			validity={props.validity}
			label={props.label}
			icon={props.icon}>
			<button
				class={concatClass(style.contentschild, props.disabled ? theme.disabled : null)}
				onClick={(props.disabled && props.validity.validity === ValidityStatus.DISABLED) ? null : props.onClick}
				disabled={props.validity ? props.validity.validity === ValidityStatus.DISABLED : false}>
				{props.children}
			</button>
		</FormRow>
	);
}
