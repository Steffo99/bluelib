import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {InputLabel, InputLabelProps} from "./InputLabel";
import {Checkbox, CheckboxProps} from "./Checkbox";


export interface LabelledCheckboxProps extends CheckboxProps {
    label: string,
    labelProps?: InputLabelProps,
    row?: boolean,
}


export function LabelledCheckbox({label, labelProps = {}, row, ...props}: LabelledCheckboxProps): JSX.Element {
    labelProps.bluelibClassNames = mergeClassNames(props.bluelibClassNames, row ? "form-group-row": "")

    return (
        <InputLabel {...labelProps}>
            <Checkbox {...props}/>
            &nbsp;{label}
        </InputLabel>
    )
}
