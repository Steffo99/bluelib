import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { RubyBlock as RubyBlockComponent } from "./RubyBlock"


export default {
    component: RubyBlockComponent,
    title: "Annotations/Ruby Block",
    decorators: [Decorators.Ruby, Decorators.Bluelib],
}


export const RubyBlock = props => (
    <RubyBlockComponent {...props}/>
)
RubyBlock.args = {
    text: "Mo",
    annotation: "ˈmɒ",
    open: "/",
    close: "/",
}
