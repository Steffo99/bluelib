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
        disabled: {
            control: {type: "boolean"},
        },
    },
}


export const Basic = props => (
    <Chapter {...props}>
        <Box>First</Box>
        <Box>Second</Box>
        <Box>Third</Box>
    </Chapter>
)
Basic.args = {}


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
        <Box>Thirteenth</Box>
        <Box>Fourteenth</Box>
        <Box>Fifteenth</Box>
        <Box>Sixteenth</Box>
        <Box>Seventeenth</Box>
        <Box>Eighteenth</Box>
        <Box>Ninteenth</Box>
        <Box>Ninteenth</Box>
        <Box>Twentieth</Box>
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
