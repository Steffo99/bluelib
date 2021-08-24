import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Sample as SampleComponent } from "./Sample"


export default {
    component: SampleComponent,
    title: "Semantics/Sample",
    decorators: [Decorators.Bluelib],
}


export const Sample = props => (
    <SampleComponent {...props}>drwx------   2 steffo steffo   4096 23 ago 05.06  Desktop</SampleComponent>
)
Sample.args = {}
