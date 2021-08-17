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


export const Nested = props => (
    <Box {...props}>
        <Box>
            <Box>
                These are three nested Boxes.
            </Box>
        </Box>
    </Box>
)
Nested.args = {}


export const NestedMultiple = props => (
    <Box {...props}>
        <Box>
            This is the first Box in a Box.
        </Box>
        <Box>
            This is the second Box in a Box.
        </Box>
        <Box>
            This is the third Box in a Box.
        </Box>
    </Box>
)
NestedMultiple.args = {}
