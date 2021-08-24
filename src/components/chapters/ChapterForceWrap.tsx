import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface ChapterForceWrapProps extends Types.BluelibHTMLProps<HTMLDivElement> {}


export function ChapterForceWrap({...props}: ChapterForceWrapProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "chapter-forcewrap")

    return (
        <BaseElement kind={"div"} {...props}/>
    )
}
