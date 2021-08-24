import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { FormField as FormFieldComponent } from "./FormField"


export default {
    component: FormFieldComponent,
    title: "Forms/Form Field",
    decorators: [Decorators.Form, Decorators.Box, Decorators.Bluelib],
    argTypes: {
        onChange: {action: "Change"},
        onSimpleChange: {action: "SimpleChange"},
    },
}


export const FormField = props => (
    <FormFieldComponent {...props}/>
)
FormField.args = {
    label: "Username",
}
