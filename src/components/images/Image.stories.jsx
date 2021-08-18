import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Image } from "./Image"
import PineappleWithSunglasses from "./elena-cordery-RLlcbkemwnw-unsplash.jpg"


export default {
    component: Image,
    title: "Images/Image",
    decorators: [Decorators.Bluelib],
}


export const NoLimit = props => (
    <Image {...props}/>
)
NoLimit.args = {
    src: PineappleWithSunglasses,
    limit: "no",
}


export const HalfLimit = NoLimit.bind({})
HalfLimit.args = {
    ...NoLimit.args,
    limit: "half",
}


export const QuarterLimit = NoLimit.bind({})
QuarterLimit.args = {
    ...NoLimit.args,
    limit: "quarter",
}