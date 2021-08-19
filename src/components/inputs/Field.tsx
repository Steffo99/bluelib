import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


interface FieldProps {
    placeholder: string,
    required?: boolean,
    disabled?: boolean,

    onChange?: (event: React.FormEvent<HTMLInputElement>) => boolean,
    onInput?: (event: React.FormEvent<HTMLInputElement>) => boolean,
    onInvalid?: (event: React.FormEvent<HTMLInputElement>) => boolean,
    onReset?: (event: React.FormEvent<HTMLInputElement>) => boolean,
    onSubmit?: (event: React.FormEvent<HTMLInputElement>) => boolean,

    [props: string]: any,
}


export function Field({onChange, onInput, onInvalid, ...props}: FieldProps): JSX.Element {

    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input", "input-field")

    // Propagate change events only if the element is enabled
    if(!props.disabled) {
        props.onChange = onChange
        props.onInput = onInput
        props.onInvalid = onInvalid
    }

    return (
        <BaseElement kind={"input"} {...props}/>
    )
}
