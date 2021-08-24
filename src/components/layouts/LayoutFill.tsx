import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {BaseLayout, BaseLayoutProps} from "./BaseLayout";
import {LayoutFillSingle} from "./LayoutFillSingle";


export interface LayoutFillProps extends BaseLayoutProps {}


export function LayoutFill({...props}: LayoutFillProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "layout-fill")

    return <BaseLayout {...props}/>
}


LayoutFill.Single = LayoutFillSingle