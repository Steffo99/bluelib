import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { FormSelect as FormSelectComponent } from "./FormSelect"
import { Option } from "../inputs/Option"


export default {
    component: FormSelectComponent,
    title: "Forms/Form Select",
    decorators: [Decorators.Form, Decorators.Box, Decorators.Bluelib],
    argTypes: {
        onChange: {action: "Change"},
        onSimpleChange: {action: "SimpleChange"},
    },
}


export const FormSelect = props => (
    <FormSelectComponent {...props}>
        <Option value={"I'm ready!"}/>
        <Option value={"Please wait..."}/>
        <Option value={"I won't be there."}/>
    </FormSelectComponent>
)
FormSelect.args = {
    label: "Ready check",
    options: {
        "I'm ready!": "READY",
        "Please wait...": "WAIT",
        "I won't be there.": "NO",
    },
}
