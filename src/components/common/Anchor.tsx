import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface AnchorProps extends Types.BluelibHTMLProps<HTMLAnchorElement> {
    displayStyle?: "broken" | "link" | "download",

    children: React.ReactNode,
}


const DISPLAY_STYLE_CLASSES = {
    link: "anchor-link",
    download: "anchor-download",
    broken: "anchor-broken",
}


export function Anchor({displayStyle, href, ...props}: AnchorProps): JSX.Element {
    if(!displayStyle) {
        if(href) {
            // noinspection HttpUrlsUsage
            if(href.startsWith("http://") || href.startsWith("https://")) {
                displayStyle = "link"
            }
            else {
                displayStyle = "download"
            }
        }
        else {
            displayStyle = "broken"
        }
    }

    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "anchor", DISPLAY_STYLE_CLASSES[displayStyle])

    return (
        <BaseElement kind={"a"} {...props}/>
    )
}
