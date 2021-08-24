import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {ChapterForceWrap} from "./ChapterForceWrap";


export interface ChapterProps extends Types.BluelibHTMLProps<HTMLDivElement> {}


export function Chapter({...props}: ChapterProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "chapter")

    return (
        <BaseElement kind={"section"} {...props}/>
    )
}


Chapter.ForceWrap = ChapterForceWrap