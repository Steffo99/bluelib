import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Field as FieldComponent } from "./Field"


export default {
    component: FieldComponent,
    title: "Inputs/Field",
    decorators: [Decorators.Bluelib],
    argTypes: {
        onChange: {action: "Change"},
        onSimpleChange: {action: "SimpleChange"},
    },
}


export const Field = props => (
    <FieldComponent {...props}/>
)
Field.args = {
    placeholder: "Enter text here",
    disabled: false,
    required: false,
}
