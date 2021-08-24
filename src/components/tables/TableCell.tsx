import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {Table} from "./Table";


interface TableCellProps extends Types.BluelibHTMLProps<HTMLTableCellElement> {
    head?: boolean,
    mark?: boolean,

    [props: string]: any,
}


export function TableCell({head = false, mark = false, ...props}: TableCellProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, head ? "table-head" : "table-data", mark ? "table-mark" : "")

    return (
        <BaseElement kind={head ? "th" : "td"} {...props}/>
    )
}
