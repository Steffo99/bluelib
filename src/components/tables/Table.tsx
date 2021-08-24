import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {TableCaption} from "./TableCaption";
import {TableHeader} from "./TableHeader";
import {TableBody} from "./TableBody";
import {TableFooter} from "./TableFooter";
import {TableRow} from "./TableRow";
import {TableCell} from "./TableCell";


interface TableProps extends Types.BluelibHTMLProps<HTMLTableElement> {}


export function Table({...props}: TableProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "table")

    return (
        <BaseElement kind={"table"} {...props}/>
    )
}

Table.Caption = TableCaption
Table.Header = TableHeader
Table.Body = TableBody
Table.Footer = TableFooter
Table.Row = TableRow
Table.Cell = TableCell
