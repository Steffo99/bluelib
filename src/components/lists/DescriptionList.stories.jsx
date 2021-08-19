import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { DescriptionList } from "./DescriptionList"


export default {
    component: DescriptionList,
    title: "Lists/DescriptionList",
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
    <DescriptionList {...props}>
        <DescriptionList.Key>
            LOL
        </DescriptionList.Key>
        <DescriptionList.Value>
            Laughing out loud
        </DescriptionList.Value>
        <DescriptionList.Key>
            KEK
        </DescriptionList.Key>
        <DescriptionList.Value>
            Equivalent to lol, but said by a member of the Horde
        </DescriptionList.Value>
        <DescriptionList.Key>
            LUL
        </DescriptionList.Key>
        <DescriptionList.Value>
            Equivalent to lol, used by twitch.tv users to send an emoticon with the face of TotalBiscuit
        </DescriptionList.Value>
    </DescriptionList>
)
Default.args = {
    disabled: false,
}
