import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface KeyboardProps extends Types.BluelibHTMLProps<HTMLPreElement> {
    press?: boolean,
    release?: boolean,
}


export function Keyboard({press = false, release = false, ...props}: KeyboardProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(
        props.bluelibClassNames, 
        "semantic-kbd",
        press && !release ? "semantic-kbd-press" : null,
        release && !press ? "semantic-kbd-release" : null,
    )

    return (
        <BaseElement kind={"kbd"} {...props}/>
    )
}
