import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Definition as DefinitionComponent } from "./Definition"


export default {
    component: DefinitionComponent,
    title: "Semantics/Definition",
    decorators: [Decorators.Bluelib],
}


export const Definition = props => (
    <DefinitionComponent {...props}>Term</DefinitionComponent>
)
Definition.args = {}
