import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { FormArea as FormAreaComponent } from "./FormArea"


export default {
    component: FormAreaComponent,
    title: "Forms/Form Area",
    decorators: [Decorators.Form, Decorators.Box, Decorators.Bluelib],
    argTypes: {
        onChange: {action: "Change"},
        onSimpleChange: {action: "SimpleChange"},
    },
}


export const FormArea = props => (
    <FormAreaComponent {...props}/>
)
FormArea.args = {
    label: "Bio",
}
