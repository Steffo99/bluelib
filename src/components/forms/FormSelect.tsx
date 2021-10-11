import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {Multiselect} from "../inputs/Multiselect"
import {FormPair, FormPairProps} from "./FormPair";
import {FormLabel, FormLabelProps} from "./FormLabel";
import {Select, SelectProps} from "../inputs/Select";


export interface FormSelectOptions {
    [key: string]: any,
}


export interface FormSelectProps extends SelectProps {
    label: string,

    validity?: Types.Validity,

    options: FormSelectOptions,

    pairProps?: FormPairProps,
    labelProps?: FormLabelProps,
}


export function FormSelect({label, validity, options, pairProps, labelProps, onSimpleChange, ...props}: FormSelectProps): JSX.Element {
    const onSimpleChangeWrapped = React.useCallback(
        value => {
            onSimpleChange?.(options[value])
        },
        [onSimpleChange, options]
    )

    const optionComponents = React.useMemo(
        () => Object.keys(options).map(key => <Select.Option value={key} key={key}/>),
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
