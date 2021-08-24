import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface OptionGroupProps {
    label: string,

    [props: string]: any,
}


export function OptionGroup({...props}: OptionGroupProps): JSX.Element {

    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input-optgroup")

    return (
        <BaseElement kind={"optgroup"} {...props}/>
    )
}
