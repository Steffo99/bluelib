import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { LabelledCheckbox as LabelledCheckboxComponent } from "./LabelledCheckbox"


export default {
    component: LabelledCheckboxComponent,
    title: "Inputs/Labelled Checkbox",
    decorators: [Decorators.Bluelib],
    argTypes: {
        onChange: {action: "Change"},
        onSimpleChange: {action: "SimpleChange"},
    },
}


export const LabelledCheckbox = props => (
    <LabelledCheckboxComponent {...props}/>
)
LabelledCheckbox.args = {
    label: "This",
    name: "what",
    value: "this",
}
