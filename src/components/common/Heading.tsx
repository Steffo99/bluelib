import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface HeadingProps extends Types.BluelibHTMLProps<HTMLHeadingElement> {
    level: 1 | 2 | 3 | 4 | 5 | 6,
}


const HEADING_KINDS_BY_LEVEL = {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
    5: "h5",
    6: "h6",
}


export function Heading({level, ...props}: HeadingProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "heading")

    return (
        <BaseElement kind={HEADING_KINDS_BY_LEVEL[level]} {...props}/>
    )
}
