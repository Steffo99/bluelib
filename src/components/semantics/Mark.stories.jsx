import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Mark as MarkComponent } from "./Mark"


export default {
    component: MarkComponent,
    title: "Semantics/Mark",
    decorators: [Decorators.Bluelib],
}


export const Mark = props => (
    <MarkComponent {...props}>Marco Function</MarkComponent>
)
Mark.args = {}
