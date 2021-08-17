import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../utils/Decorators"
import {Bluelib} from "./Bluelib"
import Color from "color"


export default {
    component: Bluelib,
    title: "Bluelib/Bluelib",
    decorators: [Decorators.Fill],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {
        backgroundColor: {
            control: {type: "color"},
        },
        foregroundColor: {
            control: {type: "color"},
        },
        accentColor: {
            control: {type: "color"},
        },
        linkColor: {
            control: {type: "color"},
        },
        brokenColor: {
            control: {type: "color"},
        },
        visitedColor: {
            control: {type: "color"},
        },
        downloadColor: {
            control: {type: "color"},
        },
        redColor: {
            control: {type: "color"},
        },
        orangeColor: {
            control: {type: "color"},
        },
        yellowColor: {
            control: {type: "color"},
        },
        limeColor: {
            control: {type: "color"},
        },
        cyanColor: {
            control: {type: "color"},
        },
        blueColor: {
            control: {type: "color"},
        },
        magentaColor: {
            control: {type: "color"},
        },
        grayColor: {
            control: {type: "color"},
        },
    },
}


export const Paper = props => (
    <Bluelib {...props}>
        <div>Hello world!</div>
    </Bluelib>
)
Paper.args = {
    theme: "paper",
}


export const RoyalBlue = Paper.bind({})
RoyalBlue.args = {
    ...Paper.args,
    theme: "royalblue",
}


export const Hacker = Paper.bind({})
Hacker.args = {
    ...Paper.args,
    theme: "hacker",
}


export const Sophon = Paper.bind({})
Sophon.args = {
    ...Paper.args,
    theme: "sophon",
}

export const CustomRed = Paper.bind({})
CustomRed.args = {
    ...Paper.args,
    foregroundColor: "#ff0000",
    backgroundColor: "#ffcccc",
    accentColor: "#000000",
    polarity: -1,
}
