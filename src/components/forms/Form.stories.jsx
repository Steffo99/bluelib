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
import { useFormState } from "../../hooks/useFormState"


export default {
    component: FormComponent,
    subcomponents: {FormField, FormRow, FormArea, FormSelect, FormRadioGroup, FormCheckboxGroup, Parenthesis, Option, Button},
    title: "Forms/Form",
    decorators: [Decorators.Box, Decorators.Bluelib],
}


export const Form = props => {
    const username = useFormState("", val => {
        if(val === "") return undefined
        return true
    })

    const password = useFormState("", val => {
        if(val === "") return undefined
        if(val.length < 8) return false
        return true
    })

    const name = useFormState("", val => {
        if(val === "") return undefined
        return true
    })

    const backstory = useFormState("", val => {
        if(val === "") return undefined
        if(val.split("\n").length < 3) return false
        return true
    })

    const gender = useFormState(null, val => {
        if(val === null) return undefined
        return true
    })

    const level = useFormState(1, val => {
        if(val < 1) return false
        if(val > 20) return false
        return true
    })

    const alignment = useFormState([], val => {
        if(val.length === 0) return undefined
        return true
    })

    const classes = useFormState([], val => {
        if(val.length === 0) return undefined
        if(val.length > level.value) return false
        return true
    })

    return (
        <FormComponent {...props}>
            <FormComponent.Field label={"Username"} {...username}/>
            <FormComponent.Field label={"Password"} type={"password"} {...password}/>
            <FormComponent.Row>
                <Parenthesis>Enter the details of your characters below.</Parenthesis>
            </FormComponent.Row>
            <FormComponent.Field label={"Name"} {...name}/>
            <FormComponent.Area label={"Backstory"} {...backstory}/>
            <FormComponent.Select label={"Gender"} {...gender}>
                <FormComponent.Select.Option value={"Male"}/>
                <FormComponent.Select.Option value={"Female"}/>
                <FormComponent.Select.Option value={"Non-binary"}/>
            </FormComponent.Select>
            <FormComponent.Field label={"Level"} type={"number"} min={1} max={20} {...level}/>
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
            ]} {...alignment}/>
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
            ]} {...classes}/>
            <FormComponent.Row>
                <FormComponent.Button>Throw fireball</FormComponent.Button>
                <FormComponent.Button>Shoot a magic missile</FormComponent.Button>
                <FormComponent.Button>Save character</FormComponent.Button>
            </FormComponent.Row>
        </FormComponent>
    )
}
Form.args = {}
