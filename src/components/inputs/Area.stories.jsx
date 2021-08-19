import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Area } from "./Area"


export default {
    component: Area,
    title: "Inputs/Area",
    decorators: [Decorators.Bluelib],
    argTypes: {
        customColor: {
            control: {type: "color"},
        },
    },
}


export const Default = props => (
    <Area {...props}/>
)
Default.args = {
    placeholder: "Enter multiline text here\n\nThis component can be resized",
    disabled: false,
    required: false,
}
