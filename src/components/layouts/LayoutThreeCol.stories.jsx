import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { LayoutThreeCol } from "./LayoutThreeCol"
import { Box } from "../panels/Box"


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
            <Box>
                Left
            </Box>
        </LayoutThreeCol.Left>
        <LayoutThreeCol.Center>
            <Box>
                Center
            </Box>
        </LayoutThreeCol.Center>
        <LayoutThreeCol.Right>
            <Box>
                Right
            </Box>
        </LayoutThreeCol.Right>
    </LayoutThreeCol>
)
Default.args = {}
