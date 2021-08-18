import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Separator } from "./Separator"


export default {
    component: Separator,
    title: "Separator/Separator",
    decorators: [Decorators.Bluelib],
    argTypes: {
        customColor: {
            control: {type: "color"},
        },
    },
}


export const Regular = props => (
    <Separator {...props}/>
)
Regular.args = {
    weight: "regular",
}


export const Heavy = Regular.bind({})
Heavy.args = {
    weight: "heavy",
}


export const Light = Regular.bind({})
Light.args = {
    weight: "light",
}

