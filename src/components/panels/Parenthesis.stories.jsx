import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Parenthesis } from "./Parenthesis"


export default {
    component: Parenthesis,
    title: "Panels/Parenthesis",
    decorators: [Decorators.Bluelib],
    argTypes: {
        customColor: {
            control: {type: "color"},
        },
        disabled: {
            control: {type: "boolean"},
        },
    },
}


export const Default = props => (
    <Parenthesis {...props}>
        This is a Parenthesis.
    </Parenthesis>
)
Default.args = {
    disabled: false,
}


export const Nested = props => (
    <Parenthesis {...props}>
        <Parenthesis>
            <Parenthesis>
                These are three nested Parentheses.
            </Parenthesis>
        </Parenthesis>
    </Parenthesis>
)
Nested.args = {
    disabled: false,
}


export const NestedMultiple = props => (
    <Parenthesis {...props}>
        <Parenthesis>
            This is the first Parenthesis in a Parenthesis.
        </Parenthesis>
        <Parenthesis>
            This is the second Parenthesis in a Parenthesis.
        </Parenthesis>
        <Parenthesis>
            This is the third Parenthesis in a Parenthesis.
        </Parenthesis>
    </Parenthesis>
)
NestedMultiple.args = {
    disabled: false,
}
