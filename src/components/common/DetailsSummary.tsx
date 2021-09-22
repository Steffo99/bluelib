import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types";
import {BaseElement} from "../BaseElement";
import {DetailsProps} from "./Details";
import mergeClassNames from "classnames"


export interface DetailsSummaryProps extends Types.BluelibHTMLProps<HTMLElement> {}


export function DetailsSummary({...props}: DetailsSummaryProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "details-summary")

    return (
        <BaseElement kind={"summary"} {...props}/>
    )
}
