import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface UAnnotationProps extends Types.BluelibHTMLProps<HTMLElement> {}


export function UAnnotation({...props}: UAnnotationProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "semantic-u")

    return (
        <BaseElement kind={"u"} {...props}/>
    )
}
