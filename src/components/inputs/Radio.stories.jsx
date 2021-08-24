import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Radio as RadioComponent } from "./Radio"
import { Box } from "../panels/Box"
import { BaseElement } from "../BaseElement"


export default {
    component: RadioComponent,
    title: "Inputs/Radio",
    decorators: [Decorators.Bluelib],
    argTypes: {
        onChange: {action: "Change"},
        onSimpleChange: {action: "SimpleChange"},
    },
}


export const Radio = props => (
    <RadioComponent {...props}/>
)
Radio.args = {
    name: "what",
    value: "this-radio-right-here",
}
