import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { LabelledRadio as LabelledRadioComponent } from "./LabelledRadio"


export default {
    component: LabelledRadioComponent,
    title: "Inputs/Labelled Radio",
    decorators: [Decorators.Bluelib],
    argTypes: {
        onChange: {action: "Change"},
        onSimpleChange: {action: "SimpleChange"},
    },
}


export const LabelledRadio = props => (
    <LabelledRadioComponent {...props}/>
)
LabelledRadio.args = {
    label: "This",
    name: "what",
    value: "this",
}
