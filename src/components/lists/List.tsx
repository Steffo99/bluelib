import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


interface ListProps {
    ordered: boolean,

    [props: string]: any,
}


export function List({ordered, ...props}: ListProps): JSX.Element {

    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "list", ordered ? "list-ordered" : "list-unordered")

    return (
        <BaseElement kind={ordered ? "ol" : "ul"} {...props}/>
    )
}


interface ListItemProps {
    [props: string]: any,
}


List.Item = function({...props}: ListItemProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "list-item")

    return (
        <BaseElement kind={"li"} {...props}/>
    )
}
