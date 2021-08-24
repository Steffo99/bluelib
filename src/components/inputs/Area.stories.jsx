import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Area as AreaComponent } from "./Area"


export default {
    component: AreaComponent,
    title: "Inputs/Area",
    decorators: [Decorators.Bluelib],
    argTypes: {
        onChange: {action: "Change"},
        onSimpleChange: {action: "SimpleChange"},
    },
}


export const Area = props => (
    <AreaComponent {...props}/>
)
Area.args = {
    placeholder: "Enter multiline text here\n\nThis component can be resized",
    disabled: false,
    required: false,
}
