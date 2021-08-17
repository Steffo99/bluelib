import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {BaseLayout} from "./BaseLayout";


interface LayoutThreeColProps {
    [props: string]: any,
}


export function LayoutThreeCol({...props}: LayoutThreeColProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "layout-threecol")

    return (
        <BaseLayout {...props}/>
    )
}


interface LayoutThreeColLeftProps {
    [props: string]: any,
}


LayoutThreeCol.Left = function({...props}: LayoutThreeColLeftProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "layout-threecol-left")

    return <BaseElement kind={"div"} {...props}/>
}


interface LayoutThreeColCenterProps {
    [props: string]: any,
}


LayoutThreeCol.Center = function({...props}: LayoutThreeColCenterProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "layout-threecol-center")

    return <BaseElement kind={"div"} {...props}/>
}


interface LayoutThreeColRightProps {
    [props: string]: any,
}


LayoutThreeCol.Right = function({...props}: LayoutThreeColRightProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "layout-threecol-right")

    return <BaseElement kind={"div"} {...props}/>
}
