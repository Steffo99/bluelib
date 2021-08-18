import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


interface SeparatorProps {
    weight?: "light" | "regular" | "heavy",

    [props: string]: any,
}


const WEIGHT_CLASSES = {
    light: "separator-light",
    regular: "",
    heavy: "separator-heavy",
}


export function Separator({weight = "regular", ...props}: SeparatorProps): JSX.Element {

    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "separator", WEIGHT_CLASSES[weight])

    return (
        <BaseElement kind={"hr"} {...props}/>
    )
}
