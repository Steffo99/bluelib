import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Image } from "./Image"
import PineappleWithSunglasses from "./elena-cordery-RLlcbkemwnw-unsplash.jpg"


export default {
    component: Image,
    title: "Images/Image",
    decorators: [Decorators.Bluelib],
    argTypes: {
        disabled: {
            control: {type: "boolean"},
        },
    },
}


export const FullLimit = props => (
    <Image {...props}/>
)
FullLimit.args = {
    src: PineappleWithSunglasses,

    limit: "no",
    disabled: false,
}


export const HalfLimit = FullLimit.bind({})
HalfLimit.args = {
    ...FullLimit.args,

    limit: "half",
}


export const QuarterLimit = FullLimit.bind({})
QuarterLimit.args = {
    ...FullLimit.args,

    limit: "quarter",
}