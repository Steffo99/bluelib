import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Chapter } from "./Chapter"
import { Box } from "../panels/Box"


export default {
    component: Chapter,
    title: "Chapters/Chapter",
    decorators: [Decorators.Bluelib],
    argTypes: {
        customColor: {
            control: {type: "color"},
        },
    },
}


export const Default = props => (
    <Chapter {...props}>
        <Box>First</Box>
        <Box>Second</Box>
        <Box>Third</Box>
    </Chapter>
)
Default.args = {}


export const AutoWrap = props => (
    <Chapter {...props}>
        <Box>First</Box>
        <Box>Second</Box>
        <Box>Third</Box>
        <Box>Fourth</Box>
        <Box>Fifth</Box>
        <Box>Sixth</Box>
        <Box>Seventh</Box>
        <Box>Eighth</Box>
        <Box>Ninth</Box>
        <Box>Tenth</Box>
        <Box>Eleventh</Box>
        <Box>Twelfth</Box>
        <Box>Thirtheenth</Box>
        <Box>Fourtheenth</Box>
        <Box>Fiftheenth</Box>
    </Chapter>
)
AutoWrap.args = {}


export const ForceWrap = props => (
    <Chapter {...props}>
        <Box>First</Box>
        <Box>Second</Box>
        <Chapter.ForceWrap/>
        <Box>Third</Box>
        <Box>Fourth</Box>
    </Chapter>
)
ForceWrap.args = {}