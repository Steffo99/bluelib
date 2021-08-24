import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {Table} from "./Table";


interface TableRowProps extends Types.BluelibHTMLProps<HTMLTableRowElement> {
    [props: string]: any,
}


export function TableRow({...props}: TableRowProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "table-row")

    return (
        <BaseElement kind={"tr"} {...props}/>
    )
}