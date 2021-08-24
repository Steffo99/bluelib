import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {ListItem} from "./ListItem";


export interface ListOrderedProps extends Types.BluelibHTMLProps<HTMLOListElement> {}


export function ListOrdered({...props}: ListOrderedProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "list", "list-ordered")

    return (
        <BaseElement kind={"ol"} {...props}/>
    )
}


ListOrdered.Item = ListItem