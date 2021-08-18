import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


interface TableProps {
    [props: string]: any,
}


export function Table({...props}: TableProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "table")

    return (
        <BaseElement kind={"table"} {...props}/>
    )
}


interface TableCaptionProps {
    position: "top" | "bottom",

    [props: string]: any,
}


const TABLE_CAPTION_CLASSES = {
    top: "table-caption-top",
    bottom: "table-caption-bottom",
}


Table.Caption = function({position, ...props}: TableCaptionProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "table-caption", TABLE_CAPTION_CLASSES[position])

    return (
        <BaseElement kind={"caption"} {...props}/>
    )
}


interface TableHeaderProps {
    [props: string]: any,
}


Table.Header = function ({position, ...props}: TableHeaderProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "table-header")

    return (
        <BaseElement kind={"thead"} {...props}/>
    )
}


interface TableBodyProps {
    [props: string]: any,
}


Table.Body = function ({position, ...props}: TableBodyProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "table-body")

    return (
        <BaseElement kind={"tbody"} {...props}/>
    )
}


interface TableFooterProps {
    [props: string]: any,
}


Table.Footer = function ({position, ...props}: TableFooterProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "table-footer")

    return (
        <BaseElement kind={"tfoot"} {...props}/>
    )
}


interface TableRowProps {
    [props: string]: any,
}


Table.Row = function ({...props}: TableRowProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "table-row")

    return (
        <BaseElement kind={"tr"} {...props}/>
    )
}


interface TableCellProps {
    head?: boolean,
    mark?: boolean,

    [props: string]: any,
}


Table.Cell = function ({head = false, mark = false, ...props}: TableCellProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, head ? "table-head" : "table-data", mark ? "table-mark" : "")

    return (
        <BaseElement kind={head ? "th" : "td"} {...props}/>
    )
}
