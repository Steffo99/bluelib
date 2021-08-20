import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Checkbox } from "./Checkbox"
import { Box } from "../panels/Box"
import { BaseElement } from "../BaseElement"


export default {
    component: Checkbox,
    title: "Inputs/Checkbox",
    decorators: [Decorators.Bluelib],
    argTypes: {
        customColor: {
            control: {type: "color"},
        },
    },
}


export const Default = props => (
    <Checkbox value={"zero"} {...props}/>
)



export const ThreeCheckboxes = props => (
    <BaseElement kind={"div"}>
        <BaseElement kind={"div"} bluelibClassNames={"color-blue"}>
            <Checkbox value={"suicune"} {...props}/> Suicune
        </BaseElement>
        <BaseElement kind={"div"} bluelibClassNames={"color-yellow"}>
            <Checkbox value={"raikou"} {...props}/> Raikou
        </BaseElement>
        <BaseElement kind={"div"} bluelibClassNames={"color-red"}>
            <Checkbox value={"entei"} {...props}/> Entei
        </BaseElement>
    </BaseElement>
)
ThreeCheckboxes.args = {
    name: "example"
}
ThreeCheckboxes.argTypes = {
    customColor: {
        control: {type: "color"},
    },
    value: {
        control: {type: "null"},
    },
}