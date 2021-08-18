import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


interface ImageProps {
    src: string,
    limit?: "no" | "half" | "quarter",

    [props: string]: any,
}


const LIMIT_CLASSES = {
    no: "",
    half: "image-limit-half",
    quarter: "image-limit-quarter",
}


export function Image({limit, ...props}: ImageProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "image")

    if(limit) {
        props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, LIMIT_CLASSES[limit])
    }

    // TODO: Capture the src and make the image clickable
    return (
        <BaseElement kind={"img"} {...props}/>
    )
}
