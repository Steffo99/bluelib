import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Dialog } from "./Dialog"


export default {
    component: Dialog,
    title: "Panels/Dialog",
    decorators: [Decorators.Bluelib],
    argTypes: {
        customColor: {
            control: {type: "color"},
        },
    },
}


export const Default = props => (
    <Dialog {...props}>
        This is a Dialog.
    </Dialog>
)
Default.args = {}
