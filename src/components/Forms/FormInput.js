import FormRow from "./FormRow";
import ValidityStatus from "../Enums/ValidityStatus";
import style from "./FormRow.less"

export default function (props) {
    return (
        <FormRow validity={props.validity} label={props.label} icon={props.icon}>
            <input
                class={style.contentschild}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                disabled={props.validity ? props.validity.validity === ValidityStatus.DISABLED : false}
                name={props.name}/>
        </FormRow>
    );
}
