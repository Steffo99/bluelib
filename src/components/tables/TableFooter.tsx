import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {Table} from "./Table";
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"



interface TableFooterProps extends Types.BluelibHTMLProps<HTMLTableSectionElement> {}


export function TableFooter({...props}: TableFooterProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "table-footer")

    return (
        <BaseElement kind={"tfoot"} {...props}/>
    )
}
