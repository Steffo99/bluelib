import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {FormArea} from "./FormArea";
import {FormCheckboxGroup} from "./FormCheckboxGroup";
import {FormField} from "./FormField";
import {FormMultiselect} from "./FormMultiselect";
import {FormRadioGroup} from "./FormRadioGroup";
import {FormRow} from "./FormRow";
import {FormSelect} from "./FormSelect";
import {FormLabel} from "./FormLabel";
import {FormPair} from "./FormPair";
import {FormGroup} from "./FormGroup";
import {Button} from "../inputs/Button";


export interface FormProps extends Types.BluelibHTMLProps<HTMLFormElement> {}


export function Form({onSubmit, ...props}: FormProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "form")

    const onSubmitPreventDefault = React.useCallback(
        event => {
            if(onSubmit) onSubmit(event)
            event.preventDefault()
        },
        [onSubmit]
    )

    return (
        <BaseElement kind={"form"} onSubmit={onSubmitPreventDefault} {...props}/>
    )
}


Form.Area = FormArea
Form.Checkboxes = FormCheckboxGroup
Form.Field = FormField
Form.Multiselect = FormMultiselect
Form.Radios = FormRadioGroup
Form.Row = FormRow
Form.Select = FormSelect
Form.Button = Button

Form.Internals = {
    Label: FormLabel,
    Pair: FormPair,
    Group: FormGroup,
}