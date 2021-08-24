import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { LayoutFill as LayoutFillComponent } from "./LayoutFill"
import { LayoutFillSingle } from "./LayoutFillSingle"
import { Box } from "../panels/Box"


export default {
    component: LayoutFillComponent,
    subcomponents: {LayoutFillSingle},
    title: "Layouts/Layout Fill",
    decorators: [Decorators.Bluelib, Decorators.Fill],
    parameters: {
        layout: "fullscreen",
    },
}


export const LayoutFill = props => (
    <LayoutFillComponent {...props}>
        <LayoutFillComponent.Single>
            <Box>
                Single
            </Box>
        </LayoutFillComponent.Single>
    </LayoutFillComponent>
)
LayoutFill.args = {}
