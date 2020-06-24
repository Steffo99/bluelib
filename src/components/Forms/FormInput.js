import FormRow from "./FormRow";
import style from "./FormRow.less"

export default function (props) {
    return (
        <FormRow
            disabled={props.disabled}
            validity={props.validity}
            label={props.label}>
            <input
                class={style.contentschild}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                disabled={props.disabled}
                name={props.name}/>
        </FormRow>
    );
}
