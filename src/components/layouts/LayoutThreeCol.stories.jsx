import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { LayoutThreeCol as LayoutThreeColComponent } from "./LayoutThreeCol"
import { LayoutThreeColLeft } from "./LayoutThreeColLeft"
import { LayoutThreeColCenter } from "./LayoutThreeColCenter"
import { LayoutThreeColRight } from "./LayoutThreeColRight"
import { Box } from "../panels/Box"


export default {
    component: LayoutThreeColComponent,
    subcomponents: {LayoutThreeColLeft, LayoutThreeColCenter, LayoutThreeColRight},
    title: "Layouts/Layout Three Col",
    decorators: [Decorators.Bluelib, Decorators.Fill],
    parameters: {
        layout: "fullscreen",
    },
}


export const LayoutThreeCol = props => (
    <LayoutThreeColComponent {...props}>
        <LayoutThreeColComponent.Left>
            <Box>
                Left
            </Box>
        </LayoutThreeColComponent.Left>
        <LayoutThreeColComponent.Center>
            <Box>
                Center
            </Box>
        </LayoutThreeColComponent.Center>
        <LayoutThreeColComponent.Right>
            <Box>
                Right
            </Box>
        </LayoutThreeColComponent.Right>
    </LayoutThreeColComponent>
)
LayoutThreeCol.args = {}
