import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Code as CodeComponent } from "./Code"


export default {
    component: CodeComponent,
    title: "Semantics/Code",
    decorators: [Decorators.Bluelib],
}


export const Code = props => (
    <CodeComponent {...props}>"Hello world!"</CodeComponent>
)
Code.args = {}
