import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Option } from "./Option"
import { OptionGroup } from "./OptionGroup"
import { Multiselect } from "./Multiselect"


export default {
    component: Multiselect,
    subcomponents: {Option, OptionGroup},
    title: "Inputs/Multiselect",
    decorators: [Decorators.Bluelib],
    argTypes: {
        onChange: {action: "Change"},
        onSimpleChange: {action: "SimpleChange"},
    },
}


export const Basic = props => (
    <Multiselect {...props}>
        <Multiselect.Option value={"Yes"}/>
        <Multiselect.Option value={"Maybe"}/>
        <Multiselect.Option value={"No"}/>
    </Multiselect>
)
Basic.args = {
    disabled: false,
}


export const WithGroups = props => (
    <Multiselect {...props}>
        <Multiselect.Group label={"A"}>
            <Multiselect.Option value={"Anchor"}/>
            <Multiselect.Option value={"Angel"}/>
            <Multiselect.Option value={"Anti-air"}/>
        </Multiselect.Group>
        <Multiselect.Group label={"B"}>
            <Multiselect.Option value={"Banana"}/>
            <Multiselect.Option value={"Boat"}/>
            <Multiselect.Option value={"Bus"}/>
        </Multiselect.Group>
    </Multiselect>
)
WithGroups.args = {
    disabled: false,
}