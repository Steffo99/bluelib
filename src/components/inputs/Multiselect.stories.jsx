import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Option } from "./Option"
import { OptionGroup } from "./OptionGroup"
import { Multiselect } from "./Multiselect"


export default {
    component: Multiselect,
    title: "Inputs/Multiselect",
    decorators: [Decorators.Bluelib],
    argTypes: {
        customColor: {
            control: {type: "color"},
        },
    },
}


export const Default = props => (
    <Multiselect {...props}>
        <Option label={"Yes"}/>
        <Option label={"Maybe"}/>
        <Option label={"No"}/>
    </Multiselect>
)
Default.args = {
    disabled: false,
}


export const WithGroups = props => (
    <Multiselect {...props}>
        <OptionGroup label={"A"}>
            <Option label={"Anchor"}/>
            <Option label={"Angel"}/>
            <Option label={"Anti-air"}/>
        </OptionGroup>
        <OptionGroup label={"B"}>
            <Option label={"Banana"}/>
            <Option label={"Boat"}/>
            <Option label={"Bus"}/>
        </OptionGroup>
    </Multiselect>
)
WithGroups.args = {
    disabled: false,
}