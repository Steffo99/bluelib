import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"



interface TableCaptionProps extends Types.BluelibHTMLProps<HTMLTableCaptionElement> {
    position: "top" | "bottom",
}


const TABLE_CAPTION_CLASSES = {
    top: "table-caption-top",
    bottom: "table-caption-bottom",
}


export function TableCaption({position = "top", ...props}: TableCaptionProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "table-caption", TABLE_CAPTION_CLASSES[position])

    return (
        <BaseElement kind={"caption"} {...props}/>
    )
}