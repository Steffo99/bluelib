import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Button as ButtonComponent } from "./Button"


export default {
    component: ButtonComponent,
    title: "Inputs/Button",
    decorators: [Decorators.Bluelib],
    argTypes: {
        onClick: {action: "Click"},
    },
}


export const Button = ({ children, ...props }) => {
    // Weird thing to get IntelliJ to understand that this component is fine
    return <ButtonComponent {...props}>{children}</ButtonComponent>
}
Button.args = {
    children: "Click me!",
    disabled: false,
}
