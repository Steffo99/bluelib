import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface ListItemProps extends Types.BluelibHTMLProps<HTMLLIElement> {}


export function ListItem({...props}: ListItemProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "list-item")

    return (
        <BaseElement kind={"li"} {...props}/>
    )
}
