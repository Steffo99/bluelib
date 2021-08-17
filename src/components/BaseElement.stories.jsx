import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../utils/Decorators"
import { BaseElement } from "./BaseElement"
import { Bluelib } from "./Bluelib"


export default {
    component: BaseElement,
    title: "Bluelib/BaseElement",
    decorators: [Decorators.Bluelib],
    argTypes: {
        customColor: {
            control: {type: "color"},
        },
    },
}


export const Default = props => (
    <BaseElement kind={"div"} {...props}>
        This is a text node child.
    </BaseElement>
)
Default.args = {
    kind: "div",
}


export const CustomColor = Default.bind({})
CustomColor.args = {
    ...Default.args,
    customColor: "#ff7f00",
}