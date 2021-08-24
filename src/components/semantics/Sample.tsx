import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface SampleProps extends Types.BluelibHTMLProps<HTMLElement> {}


export function Sample({...props}: SampleProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "semantic-samp")

    return (
        <BaseElement kind={"samp"} {...props}/>
    )
}
