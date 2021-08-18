import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { List } from "./List"


export default {
    component: List,
    title: "Lists/List",
    decorators: [Decorators.Bluelib],
    argTypes: {
        customColor: {
            control: {type: "color"},
        },
    },
}


export const Unordered = props => (
    <List {...props}>
        <List.Item>Io</List.Item>
        <List.Item>Gyrocopter</List.Item>
        <List.Item>Chaos Knight</List.Item>
    </List>
)
Unordered.args = {
    ordered: false,
}


export const Ordered = Unordered.bind({})
Ordered.args = {
    ordered: true,
}
