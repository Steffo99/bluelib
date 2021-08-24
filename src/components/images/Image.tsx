import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface ImageProps extends Types.BluelibHTMLProps<HTMLImageElement> {
    limit?: "full" | "half" | "quarter",
}


const LIMIT_CLASSES = {
    full: "",
    half: "image-limit-half",
    quarter: "image-limit-quarter",
}


export function Image({limit = "full", ...props}: ImageProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "image")

    if(limit) {
        props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, LIMIT_CLASSES[limit])
    }
    
    return (
        <BaseElement kind={"img"} {...props}/>
    )
}
