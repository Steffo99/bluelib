import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {ListItem} from "./ListItem";


export interface ListUnorderedProps extends Types.BluelibHTMLProps<HTMLUListElement> {}


export function ListUnordered({...props}: ListUnorderedProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "list", "list-unordered")

    return (
        <BaseElement kind={"ul"} {...props}/>
    )
}


ListUnordered.Item = ListItem
