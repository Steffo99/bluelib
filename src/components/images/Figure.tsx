import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import { Caption } from "./Caption"
import mergeClassNames from "classnames"


export interface FigureProps extends Types.BluelibHTMLProps<HTMLElement> {}


export function Figure({...props}: FigureProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "figure")
    
    return (
        <BaseElement kind={"figure"} {...props}/>
    )
}

Figure.Caption = Caption
