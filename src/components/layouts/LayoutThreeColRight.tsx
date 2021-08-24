import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface LayoutThreeColRightProps extends Types.BluelibHTMLProps<HTMLDivElement> {}


export function LayoutThreeColRight({...props}: LayoutThreeColRightProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "layout-threecol-right")

    return (
        <BaseElement kind={"div"} {...props}/>
    )
}
