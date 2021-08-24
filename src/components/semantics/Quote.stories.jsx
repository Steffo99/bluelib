import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Quote as QuoteComponent } from "./Quote"


export default {
    component: QuoteComponent,
    title: "Semantics/Quote",
    decorators: [Decorators.Bluelib],
}


export const Quote = props => (
    <QuoteComponent {...props}>Ho appena dichiarato guerra agli Stati Uniti per sbaglio!</QuoteComponent>
)
Quote.args = {}
