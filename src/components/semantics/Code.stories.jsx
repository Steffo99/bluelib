import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Code as CodeComponent } from "./Code"
import { Preformatted } from "./Preformatted"


export default {
    component: CodeComponent,
    title: "Semantics/Code",
    decorators: [Decorators.Bluelib],
}


export const CodeInline = props => (
    <CodeComponent {...props}>"Hello world!"</CodeComponent>
)
CodeInline.args = {}


const botsbuildbots = 
`(defun botsbuildbots () (
    (botsbuildbots)
))`


export const CodeBlock = props => (
    <Preformatted>
        <CodeComponent {...props}>{botsbuildbots}</CodeComponent>
    </Preformatted>
)
CodeBlock.args = {}
