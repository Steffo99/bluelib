import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {BaseLayout} from "./BaseLayout";


interface LayoutFillProps {
    [props: string]: any,
}


export function LayoutFill({...props}: LayoutFillProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "layout-fill")

    return <BaseLayout {...props}/>
}


interface LayoutFillSingleProps {
    [props: string]: any,
}

LayoutFill.Single = function({...props}: LayoutFillSingleProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "layout-fill-single")

    return <BaseElement kind={"div"} {...props}/>
}