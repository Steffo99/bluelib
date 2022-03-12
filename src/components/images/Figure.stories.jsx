import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Figure as FigureComponent } from "./Figure"
import { Image as ImageComponent } from "./Image"
import PineappleWithSunglasses from "./elena-cordery-RLlcbkemwnw-unsplash.jpg"


export default {
    component: FigureComponent,
    subcomponents: {Image: ImageComponent, },
    title: "Images/Figure",
    decorators: [Decorators.Bluelib],
}


export const Figure = props => (
    <FigureComponent {...props}>
        <ImageComponent src={PineappleWithSunglasses} limit="quarter"/>
    </FigureComponent>
)
Figure.args = {

}


export const TopCaption = props => (
    <FigureComponent {...props}>
        <FigureComponent.Caption>
            A pineapple with sunglasses.
        </FigureComponent.Caption>
        <ImageComponent src={PineappleWithSunglasses} limit="quarter"/>
    </FigureComponent>
)
TopCaption.args = {

}


export const BottomCaption = props => (
    <FigureComponent {...props}>
        <ImageComponent src={PineappleWithSunglasses} limit="quarter"/>
        <FigureComponent.Caption>
            A pineapple with sunglasses.
        </FigureComponent.Caption>
    </FigureComponent>
)
BottomCaption.args = {

}
