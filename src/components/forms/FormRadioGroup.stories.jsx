import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { FormRadioGroup as FormRadioGroupComponent } from "./FormRadioGroup"


export default {
    component: FormRadioGroupComponent,
    title: "Forms/Form Radio Group",
    decorators: [Decorators.Form, Decorators.Box, Decorators.Bluelib],
    argTypes: {
        onChange: {action: "Change"},
        onSimpleChange: {action: "SimpleChange"},
    },
}


export const FormRadioGroup = props => (
    <FormRadioGroupComponent {...props}/>
)
FormRadioGroup.args = {
    label: "Size",
    options: ["XS", "S", "M", "L", "XL"],
    row: false,
    disabled: false,
}
