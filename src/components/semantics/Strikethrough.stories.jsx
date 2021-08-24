import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Strikethrough as StrikethroughComponent } from "./Strikethrough"


export default {
    component: StrikethroughComponent,
    title: "Semantics/Strikethrough",
    decorators: [Decorators.Bluelib],
}


export const Strikethrough = props => (
    <StrikethroughComponent {...props}>This is wrong.</StrikethroughComponent>
)
Strikethrough.args = {}
