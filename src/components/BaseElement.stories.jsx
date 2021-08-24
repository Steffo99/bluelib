import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../utils/Decorators"
import { BaseElement as BaseElementComponent } from "./BaseElement"
import { Bluelib } from "./Bluelib"


export default {
    component: BaseElementComponent,
    title: "Internals/Base Element",
    decorators: [Decorators.Bluelib],
}


export const BaseElement = props => (
    <BaseElementComponent kind={"div"} {...props}>
        This is a text node child.
    </BaseElementComponent>
)
BaseElement.args = {
    kind: "div",
    disabled: false,
}
