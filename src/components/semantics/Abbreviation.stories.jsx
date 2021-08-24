import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Abbreviation as AbbreviationComponent } from "./Abbreviation"


export default {
    component: AbbreviationComponent,
    title: "Semantics/Abbreviation",
    decorators: [Decorators.Bluelib],
}


export const Abbreviation = props => (
    <AbbreviationComponent {...props}>DOTA</AbbreviationComponent>
)
Abbreviation.args = {
    title: "Defense of the Ancients"
}
