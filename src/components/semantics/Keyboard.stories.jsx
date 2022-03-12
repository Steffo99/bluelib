import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Keyboard as KeyboardComponent } from "./Keyboard"


export default {
    component: KeyboardComponent,
    title: "Semantics/Keyboard",
    decorators: [Decorators.Bluelib],
}


export const Simple = props => (
    <KeyboardComponent {...props}>Ctrl</KeyboardComponent>
)
Simple.args = {
    builtinColor: "red",
}


export const Pressed = props => (
    <KeyboardComponent {...props}>↓ Ctrl</KeyboardComponent>
)
Pressed.args = {
    builtinColor: "red",
    press: true,
}


export const Released = props => (
    <KeyboardComponent {...props}>↑ Ctrl</KeyboardComponent>
)
Released.args = {
    builtinColor: "red",
    release: true,
}


export const Combination = props => (
    <KeyboardComponent {...props}>
        <KeyboardComponent>
            Ctrl
        </KeyboardComponent>
        &nbsp;+&nbsp;
        <KeyboardComponent>
            Alt
        </KeyboardComponent>
        &nbsp;+&nbsp;
        <KeyboardComponent>
            Del
        </KeyboardComponent>
    </KeyboardComponent>
)
Combination.args = {
    builtinColor: "red",
}
