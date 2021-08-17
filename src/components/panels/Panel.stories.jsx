import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Panel } from "./Panel"


export default {
    component: Panel,
    title: "Panels/Panel",
    decorators: [Decorators.Bluelib],
    argTypes: {
        customColor: {
            control: {type: "color"},
        },
    },
}


export const Default = props => (
    <Panel {...props}>
        This is a Panel.
    </Panel>
)
Default.args = {}


export const Nested = props => (
    <Panel {...props}>
        <Panel>
            <Panel>
                These are three nested Panels.
            </Panel>
        </Panel>
    </Panel>
)
Nested.args = {}
