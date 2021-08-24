import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { ListUnordered as ListUnorderedComponent } from "./ListUnordered"
import { ListItem } from "./ListItem"


export default {
    component: ListUnorderedComponent,
    subcomponents: {ListItem},
    title: "Lists/List Unordered",
    decorators: [Decorators.Bluelib],
}


export const ListUnordered = props => (
    <ListUnorderedComponent {...props}>
        <ListUnorderedComponent.Item>Mario</ListUnorderedComponent.Item>
        <ListUnorderedComponent.Item>Luigi</ListUnorderedComponent.Item>
        <ListUnorderedComponent.Item>Baby Mario</ListUnorderedComponent.Item>
        <ListUnorderedComponent.Item>Baby Luigi</ListUnorderedComponent.Item>
    </ListUnorderedComponent>
)
ListUnordered.args = {}
