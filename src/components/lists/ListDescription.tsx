import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {ListTerm} from "./ListTerm";
import {ListDetails} from "./ListDetails";


export interface ListDescriptionProps extends Types.BluelibHTMLProps<HTMLDListElement> {}


export function ListDescription({...props}: ListDescriptionProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "list", "list-description")

    return (
        <BaseElement kind={"dl"} {...props}/>
    )
}


ListDescription.Term = ListTerm
ListDescription.Details = ListDetails
