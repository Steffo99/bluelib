import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {BaseLayout, BaseLayoutProps} from "./BaseLayout";
import {LayoutThreeColLeft} from "./LayoutThreeColLeft";
import {LayoutThreeColCenter} from "./LayoutThreeColCenter";
import {LayoutThreeColRight} from "./LayoutThreeColRight";


export interface LayoutThreeColProps extends BaseLayoutProps {
    [props: string]: any,
}


export function LayoutThreeCol({...props}: LayoutThreeColProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "layout-threecol")

    return (
        <BaseLayout {...props}/>
    )
}


LayoutThreeCol.Left = LayoutThreeColLeft
LayoutThreeCol.Center = LayoutThreeColCenter
LayoutThreeCol.Right = LayoutThreeColRight