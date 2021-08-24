import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import * as UUID from "uuid"
import mergeClassNames from "classnames"
import {FormPair, FormPairProps} from "./FormPair";
import {FormLabel, FormLabelProps} from "./FormLabel";
import {FormGroup, FormGroupProps} from "./FormGroup";
import {Radio} from "../inputs/Radio";
import {LabelledRadio, LabelledRadioProps} from "../inputs/LabelledRadio";



export interface FormRadioGroupProps extends Types.BluelibProps {
    name?: string,
    label: string,
    options: string[],

    row?: boolean,

    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onSimpleChange?: (value: string) => void,
    value?: string,

    validity?: Types.Validity,

    pairProps?: FormPairProps,
    labelProps?: FormLabelProps,
    groupProps?: FormGroupProps,
    radioProps?: LabelledRadioProps,
}


export function FormRadioGroup({name, label, options, row, onChange, onSimpleChange, value, validity, pairProps, labelProps, groupProps, radioProps, disabled, bluelibClassNames, customColor}: FormRadioGroupProps): JSX.Element {
    if(!name) {
        name = UUID.v4()
    }

    const radios = options.map<JSX.Element>(option => (
        <LabelledRadio
            label={option}
            value={option}
            row={row}
            checked={value ? value === option : undefined}
            name={name}
            disabled={disabled}
            {...radioProps}
        />
    ))

    const onChangeWrapped = React.useCallback(
        event => {
            if(onChange) onChange(event)
            if(onSimpleChange) onSimpleChange(event.target.value)
        },
        [onChange, onSimpleChange]
    )

    const group = (
        <FormGroup onChange={onChangeWrapped} value={value} {...groupProps}>
            {radios}
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
