import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../utils/Decorators"
import {Bluelib} from "./Bluelib"
import Color from "color"
import { LayoutThreeCol } from "./layouts/LayoutThreeCol"
import { Box } from "./panels/Box"
import { Heading } from "./common/Heading"
import { Idiomatic } from "./semantics/Idiomatic"
import { Mark } from "./semantics/Mark"


export default {
    component: Bluelib,
    title: "Core/Bluelib",
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
        <LayoutThreeCol>
            <LayoutThreeCol.Center>
                <Box>
                    <Heading level={1}>
                        Bluelib React
                    </Heading>
                    <p>
                        This is a mini-webpage-in-a-page using <Idiomatic>Bluelib React</Idiomatic>!
                    </p>
                    <p>
                        Test out the various themes by switching to the various <Mark>stories</Mark> of this component, or create your own by tweaking the <Mark>props</Mark> displayed below.
                    </p>
                </Box>
            </LayoutThreeCol.Center>
        </LayoutThreeCol>
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
    foregroundColor: "#660000",
    backgroundColor: "#ffcccc",
    accentColor: "#ff0000",
    polarity: -1,
}
