import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {RubyBlock} from "./RubyBlock";
import {RubyParenthesis} from "./RubyParenthesis";


export interface RubyProps extends Types.BluelibHTMLProps<HTMLElement> {}


export function Ruby({...props}: RubyProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "ruby")

    return (
        <BaseElement kind={"ruby"} {...props}/>
    )
}


Ruby.Block = RubyBlock

Ruby.Internals = {
    Parenthesis: RubyParenthesis,
    Block: RubyBlock,
}