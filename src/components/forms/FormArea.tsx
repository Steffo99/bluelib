import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {FormPair, FormPairProps} from "./FormPair";
import {FormLabel, FormLabelProps} from "./FormLabel";
import {Area, AreaProps} from "../inputs/Area";


export interface FormAreaProps extends AreaProps {
    label: string,

    validity?: Types.Validity,

    pairProps?: FormPairProps,
    labelProps?: FormLabelProps,
}


export function FormArea({label, validity, pairProps, labelProps, ...props}: FormAreaProps): JSX.Element {
    return (
        <FormPair
            label={<FormLabel {...labelProps}>{label}</FormLabel>}
            input={<Area {...props}/>}
            validity={validity}
            {...pairProps}
        />
    )
}
