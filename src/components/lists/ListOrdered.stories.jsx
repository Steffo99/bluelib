import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { ListOrdered as ListOrderedComponent } from "./ListOrdered"
import { ListItem } from "./ListItem"


export default {
    component: ListOrderedComponent,
    subcomponents: {ListItem},
    title: "Lists/List Ordered",
    decorators: [Decorators.Bluelib],
}


export const ListOrdered = props => (
    <ListOrderedComponent {...props}>
        <ListOrderedComponent.Item>Gold</ListOrderedComponent.Item>
        <ListOrderedComponent.Item>Silver</ListOrderedComponent.Item>
        <ListOrderedComponent.Item>Bronze</ListOrderedComponent.Item>
        <ListOrderedComponent.Item>Iron</ListOrderedComponent.Item>
        <ListOrderedComponent.Item>Wood</ListOrderedComponent.Item>
    </ListOrderedComponent>
)
ListOrdered.args = {}
