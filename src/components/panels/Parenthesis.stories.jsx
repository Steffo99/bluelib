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
    },
}


export const Default = props => (
    <Parenthesis {...props}>
        This is a Parenthesis.
    </Parenthesis>
)
Default.args = {}


export const Nested = props => (
    <Parenthesis {...props}>
        <Parenthesis>
            <Parenthesis>
                These are three nested Parentheses.
            </Parenthesis>
        </Parenthesis>
    </Parenthesis>
)
Nested.args = {}

