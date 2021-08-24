import * as React from "react"
import * as ReactDOM from "react-dom"
import * as UUID from "uuid"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {FormLabel} from "./FormLabel";
import {FormGroup} from "./FormGroup";


export interface FormPairProps extends Types.BluelibProps {
    label: JSX.Element,
    input: JSX.Element,
    // Validity is in the form pair so it can be propagated to both the label and the group
    validity?: Types.Validity,
    id?: string,
}


export function FormPair({id, label, input, validity, bluelibClassNames, customColor, disabled}: FormPairProps): JSX.Element {
    if(!id) {
        id = UUID.v4()
    }

    let validityClass
    // If the input is valid
    if(validity === true) {
        validityClass = "color-lime"
    }
    // If the input is invalid
    else if(validity === false) {
        validityClass = "color-red"
    }
    // If the input has no validity
    else if(validity === null) {
        validityClass = ""
    }
    // If no validity has been passed
    else {
        validityClass = ""
    }

    label = React.cloneElement(label, {
        htmlFor: id,
        bluelibClassNames: mergeClassNames(bluelibClassNames, validityClass),
        customColor: customColor,
    })

    input = React.cloneElement(input, {
        id: id,
        bluelibClassNames: mergeClassNames(bluelibClassNames, validityClass),
        customColor: customColor,
        disabled: disabled,
    })

    return <>
        {label}
        {input}
    </>
}
