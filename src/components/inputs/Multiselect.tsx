import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


interface MultiselectProps {
    disabled?: boolean,

    onChange?: (event: React.FormEvent<HTMLInputElement>) => boolean,

    [props: string]: any,
}


export function Multiselect({...props}: MultiselectProps): JSX.Element {

    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input", "input-multiselect")

    return (
        <BaseElement kind={"select"} multiple={true} {...props}/>
    )
}
