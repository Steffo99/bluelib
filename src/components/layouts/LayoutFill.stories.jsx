import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { LayoutFill } from "./LayoutFill"
import { Bluelib } from "../Bluelib"


export default {
    component: LayoutFill,
    title: "Layouts/LayoutFill",
    decorators: [Decorators.Bluelib, Decorators.Fill],
    parameters: {
        layout: "fullscreen",
    },
}


export const Default = props => (
    <LayoutFill {...props}>
        <LayoutFill.Single>
            Single
        </LayoutFill.Single>
    </LayoutFill>
)
Default.args = {}
