import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Field } from "./Field"


export default {
    component: Field,
    title: "Inputs/Field",
    decorators: [Decorators.Bluelib],
    argTypes: {
        customColor: {
            control: {type: "color"},
        },
        disabled: {
            control: {type: "boolean"},
        },
    },
}


export const Default = props => (
    <Field {...props}/>
)
Default.args = {
    placeholder: "Enter text here",
    disabled: false,
    required: false,
}
