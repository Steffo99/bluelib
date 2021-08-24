import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface FormGroupProps extends Types.BluelibHTMLProps<HTMLDivElement> {}


export function FormGroup({...props}: FormGroupProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "form-group")

    return (
        <BaseElement kind={"div"} {...props}/>
    )
}
