import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {Select} from "../inputs/Select"
import {FormPair, FormPairProps} from "./FormPair";
import {FormLabel, FormLabelProps} from "./FormLabel";
import {Multiselect, MultiselectProps} from "../inputs/Multiselect";


export interface FormMultiselectOptions {
    [key: string]: any,
}


export interface FormMultiselectProps extends MultiselectProps {
    label: string,

    validity?: Types.Validity,

    options: FormMultiselectOptions,

    pairProps?: FormPairProps,
    labelProps?: FormLabelProps,
}


export function FormMultiselect({label, validity, pairProps, labelProps, onSimpleChange, options, ...props}: FormMultiselectProps): JSX.Element {
    const onSimpleChangeWrapped = React.useCallback(
        values => {
            onSimpleChange?.(values.map((val: string) => options[val]))
        },
        [onSimpleChange, options]
    )

    const optionComponents = React.useMemo(
        () => Object.keys(options).map(key => <Multiselect.Option value={key} key={key}/>),
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
