import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Ruby as RubyComponent } from "./Ruby"


export default {
    component: RubyComponent,
    title: "Annotations/Ruby",
    decorators: [Decorators.Bluelib],
}


export const Ruby = props => (
    <RubyComponent {...props}>
        <RubyComponent.Block text={"Mo"} annotation={"ˈmɒ"} open={"/"} close={"/"}/>
        <RubyComponent.Block text={"de"} annotation={"dɪ"} open={"/"} close={"/"}/>
        <RubyComponent.Block text={"na"} annotation={"nə"} open={"/"} close={"/"}/>
    </RubyComponent>
)
Ruby.args = {}
