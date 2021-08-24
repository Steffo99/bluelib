import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface LayoutThreeColLeftProps extends Types.BluelibHTMLProps<HTMLDivElement> {}


export function LayoutThreeColLeft({...props}: LayoutThreeColLeftProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "layout-threecol-left")

    return (
        <BaseElement kind={"div"} {...props}/>
    )
}
