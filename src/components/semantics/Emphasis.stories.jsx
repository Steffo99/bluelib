import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Emphasis as EmphasisComponent } from "./Emphasis"


export default {
    component: EmphasisComponent,
    title: "Semantics/Emphasis",
    decorators: [Decorators.Bluelib],
}


export const Emphasis = props => (
    <div>This is <EmphasisComponent {...props}>really</EmphasisComponent> good.</div>
)
Emphasis.args = {}
