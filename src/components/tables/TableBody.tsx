import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {Table} from "./Table";
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"



interface TableBodyProps extends Types.BluelibHTMLProps<HTMLTableSectionElement> {}


export function TableBody({...props}: TableBodyProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "table-body")

    return (
        <BaseElement kind={"tbody"} {...props}/>
    )
}
