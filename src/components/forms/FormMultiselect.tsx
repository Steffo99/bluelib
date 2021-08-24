import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {FormPair, FormPairProps} from "./FormPair";
import {FormLabel, FormLabelProps} from "./FormLabel";
import {Multiselect, MultiselectProps} from "../inputs/Multiselect";


export interface FormMultiselectProps extends MultiselectProps {
    label: string,

    validity?: Types.Validity,

    pairProps?: FormPairProps,
    labelProps?: FormLabelProps,
}


export function FormMultiselect({label, validity, pairProps, labelProps, ...props}: FormMultiselectProps): JSX.Element {
    return (
        <FormPair
            label={<FormLabel {...labelProps}>{label}</FormLabel>}
            input={<Multiselect {...props}/>}
            validity={validity}
            {...pairProps}
        />
    )
}


FormMultiselect.Option = Multiselect.Option