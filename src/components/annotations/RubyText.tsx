import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface RubyTextProps extends Types.BluelibHTMLProps<HTMLElement> {}


export function RubyText({...props}: RubyTextProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "ruby-text")

    return (
        <BaseElement kind={"rt"} {...props}/>
    )
}
