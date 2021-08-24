import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Side as SideComponent } from "./Side"


export default {
    component: SideComponent,
    title: "Semantics/Side",
    decorators: [Decorators.Bluelib],
}


export const Side = props => (
    <SideComponent {...props}>This is a small, irrelevant, side comment.</SideComponent>
)
Side.args = {}
