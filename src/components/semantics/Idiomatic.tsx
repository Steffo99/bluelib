import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface IdiomaticProps extends Types.BluelibHTMLProps<HTMLElement> {}


export function Idiomatic({...props}: IdiomaticProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "semantic-i")

    return (
        <BaseElement kind={"i"} {...props}/>
    )
}
