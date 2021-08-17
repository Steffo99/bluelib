import * as React from "react"
import * as ReactDOM from "react-dom"
import {Bluelib, BluelibProps} from "./Bluelib"
import Color from "color"


export default {
    component: Bluelib,
    title: "Bluelib",
}


export const Paper = props => (
    <Bluelib {...props}>
        Hello world!
    </Bluelib>
)
Paper.args = {
    theme: "paper",
}


export const RoyalBlue = Paper.bind({})
RoyalBlue.args = {
    theme: "royalblue",
}


export const Hacker = Paper.bind({})
Hacker.args = {
    theme: "hacker",
}


export const Sophon = Paper.bind({})
Sophon.args = {
    theme: "sophon",
}

export const CustomRed = Paper.bind({})
CustomRed.args = {
    theme: "paper",
    foregroundColor: Color("#ff0000"),
    backgroundColor: Color("#ffcccc"),
    accentColor: Color("#000000"),
    polarity: -1,
}
