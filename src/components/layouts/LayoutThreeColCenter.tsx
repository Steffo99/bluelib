import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface LayoutThreeColCenterProps extends Types.BluelibHTMLProps<HTMLDivElement> {}


export function LayoutThreeColCenter({...props}: LayoutThreeColCenterProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "layout-threecol-center")

    return (
        <BaseElement kind={"div"} {...props}/>
    )
}
