import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {Multiselect} from "../inputs/Multiselect"
import {FormPair, FormPairProps} from "./FormPair";
import {FormLabel, FormLabelProps} from "./FormLabel";
import {Select, SelectProps} from "../inputs/Select";


export interface FormSelectOptions<T> {
    [key: string]: T,
}


export interface FormSelectProps<T> extends Types.BluelibProps {
    label: string,

    validity?: Types.Validity,

    options: FormSelectOptions<T>,

    pairProps?: FormPairProps,
    labelProps?: FormLabelProps,

    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    onSimpleChange?: (value: T) => void,
    value?: T,
}


export function FormSelect<T>({label, validity, options, pairProps, labelProps, onSimpleChange, value, ...props}: FormSelectProps<T>): JSX.Element {
    const onSimpleChangeWrapped = React.useCallback(
        value => {
            onSimpleChange?.(options[value])
        },
        [onSimpleChange, options]
    )

    const optionComponents = React.useMemo(
        () => Object.entries(options).map(([optKey, optValue]) => <Select.Option value={optKey} key={optKey} selected={value === optValue}/>),
        [options],
    )

    return (
        <FormPair
            label={<FormLabel {...labelProps}>{label}</FormLabel>}
            input={
                <Select onSimpleChange={onSimpleChangeWrapped} {...props}>
                    {optionComponents}
                </Select>
            }
            validity={validity}
            {...pairProps}
        />
    )
}
