import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Strong as StrongComponent } from "./Strong"


export default {
    component: StrongComponent,
    title: "Semantics/Strong",
    decorators: [Decorators.Bluelib],
}


export const Strong = props => (
    <StrongComponent {...props}>This is something of a strong importance!</StrongComponent>
)
Strong.args = {}
