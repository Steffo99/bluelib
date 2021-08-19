import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Select } from "./Select"
import { Option } from "./Option"
import { OptionGroup } from "./OptionGroup"


export default {
    component: Select,
    title: "Inputs/Select",
    decorators: [Decorators.Bluelib],
    argTypes: {
        customColor: {
            control: {type: "color"},
        },
    },
}


export const Default = props => (
    <Select {...props}>
        <Option label={"Yes"}/>
        <Option label={"Maybe"}/>
        <Option label={"No"}/>
    </Select>
)
Default.args = {
    disabled: false,
}


export const WithGroups = props => (
    <Select {...props}>
        <Option label={"Ungrouped"}/>
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
    </Select>
)
WithGroups.args = {
    disabled: false,
}