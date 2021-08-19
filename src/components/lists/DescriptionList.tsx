import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


interface DescriptionListProps {
    [props: string]: any,
}


export function DescriptionList({...props}: DescriptionListProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "list-description")

    return (
        <BaseElement kind={"dl"} {...props}/>
    )
}


interface DescriptionListKeyProps {
    [props: string]: any,
}


DescriptionList.Key = function({...props}: DescriptionListKeyProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "list-description-key")

    return (
        <BaseElement kind={"dt"} {...props}/>
    )
}


interface DescriptionListValueProps {
    [props: string]: any,
}


DescriptionList.Value = function({...props}: DescriptionListValueProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "list-description-value")

    return (
        <BaseElement kind={"dd"} {...props}/>
    )
}
