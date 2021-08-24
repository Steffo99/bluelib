import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Checkbox as CheckboxComponent } from "./Checkbox"
import { Box } from "../panels/Box"
import { BaseElement } from "../BaseElement"


export default {
    component: CheckboxComponent,
    title: "Inputs/Checkbox",
    decorators: [Decorators.Bluelib],
    argTypes: {
        onChange: {action: "Change"},
        onSimpleChange: {action: "SimpleChange"},
    },
}


export const Checkbox = props => (
    <CheckboxComponent {...props}/>
)
Checkbox.args = {
    name: "what",
    value: "this-checkbox-right-here",
}
