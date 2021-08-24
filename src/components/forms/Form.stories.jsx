import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Form as FormComponent } from "./Form"
import { FormField } from "./FormField"
import { FormArea } from "./FormArea"
import { FormSelect } from "./FormSelect"
import { Option } from "../inputs/Option"
import { FormMultiselect } from "./FormMultiselect"
import { FormRadioGroup } from "./FormRadioGroup"
import { FormCheckboxGroup } from "./FormCheckboxGroup"
import { FormRow } from "./FormRow"
import { Button } from "../inputs/Button"
import { Parenthesis } from "../panels/Parenthesis"


export default {
    component: FormComponent,
    subcomponents: {FormField, FormRow, FormArea, FormSelect, FormRadioGroup, FormCheckboxGroup, Parenthesis, Option, Button},
    title: "Forms/Form",
    decorators: [Decorators.Box, Decorators.Bluelib],
}


export const Form = props => (
    <FormComponent {...props}>
        <FormComponent.Field label={"Username"}/>
        <FormComponent.Field label={"Password"} type={"password"}/>
        <FormComponent.Row>
            <Parenthesis>Enter the details of your characters below.</Parenthesis>
        </FormComponent.Row>
        <FormComponent.Field label={"Name"}/>
        <FormComponent.Area label={"Backstory"}/>
        <FormComponent.Select label={"Gender"}>
            <FormComponent.Select.Option value={"Male"}/>
            <FormComponent.Select.Option value={"Female"}/>
            <FormComponent.Select.Option value={"Non-binary"}/>
        </FormComponent.Select>
        <FormComponent.Field label={"Level"} type={"number"} min={1} max={20}/>
        <FormComponent.Radios label={"Alignment"} row={true} options={[
            "Lawful good",
            "Lawful neutral",
            "Lawful evil",
            "Neutral good",
            "Neutral",
            "Neutral evil",
            "Chaotic good",
            "Chaotic neutral",
            "Chaotic evil",
            "Other",
        ]}/>
        <FormComponent.Checkboxes label={"Classes"} row={false} options={[
            "Artificer",
            "Barbarian",
            "Bard",
            "Cleric",
            "Druid",
            "Fighter",
            "Monk",
            "Paladin",
            "Ranger",
            "Rogue",
            "Sorcerer",
            "Warlock",
            "Wizard",
        ]}/>
        <FormComponent.Row>
            <FormComponent.Button>Throw fireball</FormComponent.Button>
            <FormComponent.Button>Shoot a magic missile</FormComponent.Button>
            <FormComponent.Button>Save character</FormComponent.Button>
        </FormComponent.Row>
    </FormComponent>
)
Form.args = {}
