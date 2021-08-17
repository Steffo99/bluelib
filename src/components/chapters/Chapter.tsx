import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


interface ChapterProps {
    [props: string]: any,
}


export function Chapter({...props}: ChapterProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "chapter")

    return (
        <BaseElement kind={"section"} {...props}/>
    )
}


interface ChapterForceWrapProps {
    [props: string]: any,
}


Chapter.ForceWrap = function({...props}: ChapterForceWrapProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "chapter-forcewrap")

    return (
        <BaseElement kind={"div"} {...props}/>
    )
}