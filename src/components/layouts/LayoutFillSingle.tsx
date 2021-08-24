import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface LayoutFillSingleProps extends Types.BluelibHTMLProps<HTMLDivElement> {}


export function LayoutFillSingle({...props}: LayoutFillSingleProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "layout-fill-single")

    return (
        <BaseElement kind={"div"} {...props}/>
    )
}
