import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { ListDescription as ListDescriptionComponent } from "./ListDescription"


export default {
    component: ListDescriptionComponent,
    title: "Lists/List Description",
    decorators: [Decorators.Bluelib],
}


export const ListDescription = props => (
    <ListDescriptionComponent {...props}>
        <ListDescriptionComponent.Term>
            LOL
        </ListDescriptionComponent.Term>
        <ListDescriptionComponent.Details>
            Laughing out loud
        </ListDescriptionComponent.Details>
        <ListDescriptionComponent.Term>
            KEK
        </ListDescriptionComponent.Term>
        <ListDescriptionComponent.Details>
            Equivalent to lol, but said by a member of the Horde
        </ListDescriptionComponent.Details>
        <ListDescriptionComponent.Term>
            LUL
        </ListDescriptionComponent.Term>
        <ListDescriptionComponent.Details>
            Equivalent to lol, used by twitch.tv users to send an emoticon with the face of TotalBiscuit
        </ListDescriptionComponent.Details>
    </ListDescriptionComponent>
)
ListDescription.args = {}
