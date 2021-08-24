import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {Table} from "./Table";
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"



interface TableHeaderProps extends Types.BluelibHTMLProps<HTMLTableSectionElement> {}


export function TableHeader({...props}: TableHeaderProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "table-header")

    return (
        <BaseElement kind={"thead"} {...props}/>
    )
}
