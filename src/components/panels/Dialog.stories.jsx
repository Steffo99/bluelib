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
        disabled: {
            control: {type: "boolean"},
        },
    },
}


export const Default = props => (
    <Dialog {...props}>
        This is a Dialog.
    </Dialog>
)
Default.args = {
    disabled: false,
}


export const Nested = props => (
    <Dialog {...props}>
        <Dialog>
            <Dialog>
                These are three nested Dialogs.
            </Dialog>
        </Dialog>
    </Dialog>
)
Nested.args = {
    disabled: false,
}


export const NestedMultiple = props => (
    <Dialog {...props}>
        <Dialog>
            This is the first Dialog in a Dialog.
        </Dialog>
        <Dialog>
            This is the second Dialog in a Dialog.
        </Dialog>
        <Dialog>
            This is the third Dialog in a Dialog.
        </Dialog>
    </Dialog>
)
NestedMultiple.args = {
    disabled: false,
}
