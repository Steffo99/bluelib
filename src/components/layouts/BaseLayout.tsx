import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface BaseLayoutProps extends Types.BluelibHTMLProps<HTMLDivElement> {}


export function BaseLayout({...props}: BaseLayoutProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "layout")

    return (
        <BaseElement kind={"div"} {...props}/>
    )
}
