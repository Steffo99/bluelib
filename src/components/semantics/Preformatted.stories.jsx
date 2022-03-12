import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Preformatted as PreformattedComponent } from "./Preformatted"


export default {
    component: PreformattedComponent,
    title: "Semantics/Preformatted",
    decorators: [Decorators.Bluelib],
}


export const Preformatted = props => (
    <PreformattedComponent {...props}>{`Look at me!\nI can start new lines and have indentation!`}</PreformattedComponent>
)
Preformatted.args = {}
