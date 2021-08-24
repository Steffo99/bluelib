import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { FormRow as FormRowComponent } from "./FormRow"
import { Parenthesis } from "../panels/Parenthesis"
import { Button } from "../inputs/Button"
import { Separator } from "../separators/Separator"


export default {
    component: FormRowComponent,
    title: "Forms/Form Row",
    decorators: [Decorators.Form, Decorators.Box, Decorators.Bluelib],
}


export const WithText = props => (
    <FormRowComponent {...props}>
        <Parenthesis>By logging in, you accept our Terms of Service.</Parenthesis>
    </FormRowComponent>
)
WithText.args = {}


export const WithButtons = props => (
    <FormRowComponent {...props}>
        <Button>Cancel</Button>
        <Button>Retry</Button>
        <Button>Ignore</Button>
    </FormRowComponent>
)
WithButtons.args = {}
