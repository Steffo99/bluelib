import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Separator } from "./Separator"


export default {
    component: Separator,
    title: "Separators/Separator",
    decorators: [Decorators.Bluelib],
}


export const Regular = props => (
    <Separator {...props}/>
)
Regular.args = {
    weight: "regular",
}


export const Heavy = Regular.bind({})
Heavy.args = {
    ...Regular.args,
    weight: "heavy",
}


export const Light = Regular.bind({})
Light.args = {
    ...Regular.args,
    weight: "light",
}

