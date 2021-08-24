import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Cite as CiteComponent } from "./Cite"


export default {
    component: CiteComponent,
    title: "Semantics/Cite",
    decorators: [Decorators.Bluelib],
}


export const Cite = props => (
    <CiteComponent {...props}>--Steffo, 2021</CiteComponent>
)
Cite.args = {

}
