import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {Select} from "../inputs/Select"
import {FormPair, FormPairProps} from "./FormPair";
import {FormLabel, FormLabelProps} from "./FormLabel";
import {Multiselect, MultiselectProps} from "../inputs/Multiselect";


export interface FormMultiselectOptions<T> {
    [key: string]: T,
}


export interface FormMultiselectProps<T> extends Types.BluelibProps {
    label: string,

    validity?: Types.Validity,

    options: FormMultiselectOptions<T>,

    pairProps?: FormPairProps,
    labelProps?: FormLabelProps,

    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    onSimpleChange?: (value: T[]) => void,
    value?: T[],
}


export function FormMultiselect<T>({label, validity, pairProps, labelProps, onSimpleChange, options, value, ...props}: FormMultiselectProps<T>): JSX.Element {
    const onSimpleChangeWrapped = React.useCallback(
        values => {
            onSimpleChange?.(values.map((val: string) => options[val]))
        },
        [onSimpleChange, options]
    )

    const optionComponents = React.useMemo(
        () => Object.entries(options).map(([optKey, optValue]) => <Multiselect.Option value={optKey} key={optKey} selected={value?.includes(optValue)}/>),
        [options],
    )

    return (
        <FormPair
            label={<FormLabel {...labelProps}>{label}</FormLabel>}
            input={
                <Multiselect onSimpleChange={onSimpleChangeWrapped} {...props}>
                    {optionComponents}
                </Multiselect>
            }
            validity={validity}
            {...pairProps}
        />
    )
}
