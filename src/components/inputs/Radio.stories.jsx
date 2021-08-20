import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Radio } from "./Radio"
import { Box } from "../panels/Box"
import { BaseElement } from "../BaseElement"


export default {
    component: Radio,
    title: "Inputs/Radio",
    decorators: [Decorators.Bluelib],
    argTypes: {
        customColor: {
            control: {type: "color"},
        },
    },
}


export const Default = props => (
    <Radio value={"zero"} {...props}/>
)



export const ThreeRadios = props => (
    <BaseElement kind={"div"}>
        <BaseElement kind={"div"} bluelibClassNames={"color-blue"}>
            <Radio value={"articuno"} {...props}/> Articuno
        </BaseElement>
        <BaseElement kind={"div"} bluelibClassNames={"color-yellow"}>
            <Radio value={"zapdos"} {...props}/> Zapdos
        </BaseElement>
        <BaseElement kind={"div"} bluelibClassNames={"color-red"}>
            <Radio value={"moltres"} {...props}/> Moltres
        </BaseElement>
    </BaseElement>
)
ThreeRadios.args = {
    name: "example"
}
ThreeRadios.argTypes = {
    customColor: {
        control: {type: "color"},
    },
    value: {
        control: {type: "null"},
    },
}