import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {RubyParenthesis} from "./RubyParenthesis";
import {RubyText} from "./RubyText";


export interface RubyBlockProps extends Types.BluelibProps {
    text: string,
    open?: string,
    annotation: string,
    close: string,
}


export function RubyBlock({text, open = "(", annotation, close = ")"}: RubyBlockProps): JSX.Element {
    return <>
        {text}
        <RubyParenthesis>{open}</RubyParenthesis>
        <RubyText>{annotation}</RubyText>
        <RubyParenthesis>{close}</RubyParenthesis>
    </>

}
