import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


interface LayoutProps {

    [props: string]: any,
}


export function BaseLayout({...props}: LayoutProps): JSX.Element {

    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "layout")

    return (
        <BaseElement kind={"div"} {...props}/>
    )
}
