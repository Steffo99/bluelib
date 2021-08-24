import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { FormCheckboxGroup as FormCheckboxGroupComponent } from "./FormCheckboxGroup"


export default {
    component: FormCheckboxGroupComponent,
    title: "Forms/Form Checkbox Group",
    decorators: [Decorators.Form, Decorators.Box, Decorators.Bluelib],
    argTypes: {
        onChange: {action: "Change"},
        onSimpleChange: {action: "SimpleChange"},
    },
}


export const Unmanaged = props => (
    <FormCheckboxGroupComponent {...props}/>
)
Unmanaged.args = {
    label: "Sizes",
    options: ["XS", "S", "M", "L", "XL"],
    value: undefined,
    row: false,
    disabled: false,
}


export const Managed = Unmanaged.bind({})
Managed.args = {
    ...Unmanaged.args,
    value: ["M"],
}
