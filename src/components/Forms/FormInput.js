import FormRow from "./FormRow";
import style from "./FormRow.less"

export default function (props) {
    return (
        <FormRow {...props}>
            <input
                class={style.contentschild}
                type={props.type}
                value={props.value}
                onChange={props.disabled ? null : props.onChange}
                onFocus={props.disabled ? null : props.onFocus}
                onBlur={props.disabled ? null : props.onBlur}
                disabled={props.disabled}
                name={props.name}/>
        </FormRow>
    );
}
