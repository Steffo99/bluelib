import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Box } from "./Box"


export default {
    component: Box,
    title: "Panels/Box",
    decorators: [Decorators.Bluelib],
    argTypes: {
        customColor: {
            control: {type: "color"},
        },
    },
}


export const Default = props => (
    <Box {...props}>
        This is a Box.
    </Box>
)
Default.args = {}
