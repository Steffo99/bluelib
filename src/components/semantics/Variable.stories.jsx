import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Variable as VariableComponent } from "./Variable"
import { Code } from "./Code"


export default {
    component: VariableComponent,
    title: "Semantics/Variable",
    decorators: [Decorators.Bluelib],
}


export const Variable = props => (
    <Code>let <VariableComponent {...props}>variable</VariableComponent> = 1</Code>
)
Variable.args = {}
