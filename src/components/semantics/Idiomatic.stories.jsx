import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Idiomatic as IdiomaticComponent } from "./Idiomatic"


export default {
    component: IdiomaticComponent,
    title: "Semantics/Idiomatic",
    decorators: [Decorators.Bluelib],
}


export const Idiomatic = props => (
    <IdiomaticComponent {...props}/>
)
Idiomatic.args = {}
