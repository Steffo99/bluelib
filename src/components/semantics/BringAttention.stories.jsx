import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { BringAttention as BringAttentionComponent } from "./BringAttention"


export default {
    component: BringAttentionComponent,
    title: "Semantics/Bring Attention",
    decorators: [Decorators.Bluelib],
}


export const BringAttention = props => (
    <BringAttentionComponent {...props}>This is important.</BringAttentionComponent>
)
BringAttention.args = {}
