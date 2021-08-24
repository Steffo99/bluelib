import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface OptionProps {
    value: string,

    [props: string]: any,
}


export function Option({value, ...props}: OptionProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input-option")

    return (
        <BaseElement kind={"option"} {...props}>
            {value}
        </BaseElement>
    )
}
