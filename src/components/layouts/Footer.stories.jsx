import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Footer as FooterComponent } from "./Footer"


export default {
    component: FooterComponent,
    title: "Layouts/Footer",
    decorators: [Decorators.Bluelib],
}


export const Footer = props => (
    <FooterComponent {...props}>© 2021 Stefano Pigozzi</FooterComponent>
)
Footer.args = {}
