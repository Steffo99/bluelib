import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types";
import {BaseElement} from "../BaseElement";
import {DetailsProps} from "./Details";
import mergeClassNames from "classnames"


export interface DetailsContentProps extends Types.BluelibHTMLProps<HTMLElement> {}


export function DetailsContent({...props}: DetailsContentProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "details-content")

    return (
        <BaseElement kind={"div"} {...props}/>
    )
}
