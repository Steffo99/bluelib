A form where the user can input things.

```jsx
import Bluelib from "../Bluelib";
import Color from "../Color";
import FormElement from "../FormElement";
import FormSubmit from "../FormSubmit";


<Bluelib>
    <Form>
        <FormElement label={"Username"} placeholder={"Steffo"} required={true}/>
        <FormElement label={"Email"} type={"email"} placeholder={"me@steffo.eu"}/>
        <FormElement label={"Password"} type={"password"} placeholder={"hunter2"} required={true}/>
        <FormElement label={"Phone"} type={"tel"} placeholder={"+39 123 456 7890"}/>
        <FormElement label={"Antani"} placeholder={"eh?"} disabled/>
        <Form.Buttons>
            <Color builtin={"red"}>
                <FormSubmit>Cancel</FormSubmit>
            </Color>
            <Color builtin={"lime"}>
                <FormSubmit>Submit</FormSubmit>
            </Color>
        </Form.Buttons>
    </Form>
</Bluelib>
```
