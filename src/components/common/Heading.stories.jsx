import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Heading as HeadingComponent } from "./Heading"


export default {
    component: HeadingComponent,
    title: "Common/Heading",
    decorators: [Decorators.Bluelib],
}


const HeadingTemplate = props => (
    <HeadingComponent {...props}>
        The United Cantons capitulate!
    </HeadingComponent>
)


export const HeadingLevel1 = HeadingTemplate.bind({})
HeadingLevel1.args = {
    level: 1,
}

export const HeadingLevel2 = HeadingTemplate.bind({})
HeadingLevel2.args = {
    level: 2,
}

export const HeadingLevel3 = HeadingTemplate.bind({})
HeadingLevel3.args = {
    level: 3,
}

export const HeadingLevel4 = HeadingTemplate.bind({})
HeadingLevel4.args = {
    level: 4,
}

export const HeadingLevel5 = HeadingTemplate.bind({})
HeadingLevel5.args = {
    level: 5,
}

export const HeadingLevel6 = HeadingTemplate.bind({})
HeadingLevel6.args = {
    level: 6,
}

