import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { LayoutThreeCol } from "./LayoutThreeCol"


export default {
    component: LayoutThreeCol,
    title: "Layouts/LayoutThreeCol",
    decorators: [Decorators.Bluelib, Decorators.Fill],
    parameters: {
        layout: "fullscreen",
    },
}


export const Default = props => (
    <LayoutThreeCol {...props}>
        <LayoutThreeCol.Left>
            Left
        </LayoutThreeCol.Left>
        <LayoutThreeCol.Center>
            Center
        </LayoutThreeCol.Center>
        <LayoutThreeCol.Right>
            Right
        </LayoutThreeCol.Right>
    </LayoutThreeCol>
)
Default.args = {}
