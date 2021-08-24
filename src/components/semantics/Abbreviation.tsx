import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface AbbreviationProps extends Types.BluelibHTMLProps<HTMLElement> {
    title: string,
}


export function Abbreviation({...props}: AbbreviationProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "semantic-abbr")

    return (
        <BaseElement kind={"abbr"} {...props}/>
    )
}
