import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Select, Select as SelectComponent } from "./Select"
import { Option } from "./Option"
import { OptionGroup } from "./OptionGroup"


export default {
    component: SelectComponent,
    title: "Inputs/Select",
    decorators: [Decorators.Bluelib],
    argTypes: {
        onChange: {action: "Change"},
        onSimpleChange: {action: "SimpleChange"},
    },
}


export const Basic = props => (
    <SelectComponent {...props}>
        <SelectComponent.Option value={"Yes"}/>
        <SelectComponent.Option value={"Maybe"}/>
        <SelectComponent.Option value={"No"}/>
    </SelectComponent>
)
Basic.args = {
    disabled: false,
}


export const WithGroups = props => (
    <SelectComponent {...props}>
        <SelectComponent.Option value={"Ungrouped"}/>
        <SelectComponent.Group label={"A"}>
            <SelectComponent.Option value={"Anchor"}/>
            <SelectComponent.Option value={"Angel"}/>
            <SelectComponent.Option value={"Anti-air"}/>
        </SelectComponent.Group>
        <SelectComponent.Group label={"B"}>
            <SelectComponent.Option value={"Banana"}/>
            <SelectComponent.Option value={"Boat"}/>
            <SelectComponent.Option value={"Bus"}/>
        </SelectComponent.Group>
    </SelectComponent>
)
WithGroups.args = {
    disabled: false,
}