import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {FormPair, FormPairProps} from "./FormPair";
import {FormLabel, FormLabelProps} from "./FormLabel";
import {Field, FieldProps} from "../inputs/Field";


export interface FormFieldProps extends FieldProps {
    label: string,

    validity?: Types.Validity,

    pairProps?: FormPairProps,
    labelProps?: FormLabelProps,
}


export function FormField({label, validity, pairProps, labelProps, ...props}: FormFieldProps): JSX.Element {
    return (
        <FormPair
            label={<FormLabel {...labelProps}>{label}</FormLabel>}
            input={<Field {...props}/>}
            validity={validity}
            {...pairProps}
        />
    )
}
