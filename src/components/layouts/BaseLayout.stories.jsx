import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { BaseLayout } from "./BaseLayout"
import { Bluelib } from "../Bluelib"


export default {
    component: BaseLayout,
    title: "Abstract/BaseLayout",
    decorators: [Decorators.Bluelib, Decorators.Fill],
    parameters: {
        layout: "fullscreen",
    },
}


export const Default = props => (
    <BaseLayout {...props}/>
)
Default.args = {}
