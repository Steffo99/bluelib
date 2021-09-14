import * as React from "react"
import Color from "color"
import {Argument as ClassNamesArgument} from "classnames"


export type ClassNames = ClassNamesArgument


export type State<Value> = [Value, React.Dispatch<React.SetStateAction<Value>>]
export type StateContext<Value> = React.Context<State<Value> | undefined>


export interface BluelibProps {
    bluelibClassNames?: ClassNames,
    customColor?: typeof Color,
    disabled?: boolean,
}


export interface BluelibHTMLProps<Element extends HTMLElement> extends BluelibProps, React.HTMLProps<Element> {}


export type InputValue = readonly string[] | string | number | undefined
export type Validity = null | "running" | "ok" | "error"
