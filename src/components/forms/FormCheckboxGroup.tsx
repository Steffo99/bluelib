import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import * as UUID from "uuid"
import mergeClassNames from "classnames"
import {FormPair, FormPairProps} from "./FormPair";
import {FormLabel, FormLabelProps} from "./FormLabel";
import {FormGroup, FormGroupProps} from "./FormGroup";
import {LabelledCheckbox, LabelledCheckboxProps} from "../inputs/LabelledCheckbox";


export interface FormCheckboxGroupProps extends Types.BluelibProps {
    name?: string,
    label: string,
    options: string[],

    row?: boolean,

    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onSimpleChange?: (value: string[]) => void,
    value?: string[],

    validity?: Types.Validity,

    pairProps?: FormPairProps,
    labelProps?: FormLabelProps,
    groupProps?: FormGroupProps,
    checkboxProps?: LabelledCheckboxProps,
}


export function FormCheckboxGroup({name, label, options, row, onChange, onSimpleChange, value, validity, pairProps, labelProps, groupProps, checkboxProps, disabled, bluelibClassNames, customColor}: FormCheckboxGroupProps): JSX.Element {
    if(!name) {
        name = UUID.v4()
    }

    const checkboxes = options.map<JSX.Element>(option => (
        <LabelledCheckbox
            label={option}
            value={option}
            row={row}
            checked={value ? value.includes(option) : undefined}
            name={name}
            disabled={disabled}
            {...checkboxProps}
        />
    ))

    const onChangeWrapped = React.useCallback(
        event => {
            if(onChange) onChange(event)
            if(value && onSimpleChange) {
                if(event.target.checked) {
                    onSimpleChange(value.concat(event.target.value))
                }
                else {
                    const valueCopy = Array.from(value)
                    const indexOf = valueCopy.indexOf(event.target.value)
                    if(indexOf !== -1) valueCopy.splice(indexOf, 1)
                    onSimpleChange(valueCopy)
                }
            }
        },
        [onChange, value, onSimpleChange]
    )

    const group = (
        <FormGroup onChange={onChangeWrapped} value={value} {...groupProps}>
            {checkboxes}
        </FormGroup>
    )

    return (
        <FormPair
            label={<FormLabel {...labelProps}>{label}</FormLabel>}
            input={group}
            validity={validity}
            bluelibClassNames={bluelibClassNames}
            customColor={customColor}
            {...pairProps}
        />
    )
}
