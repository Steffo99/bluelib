An element of a [Form](#form), containing both a [FormLabel](#formlabel) and a [FormInput](#forminput).

Automatically handles the pairing of [FormLabel](#formlabel) and [FormInput](#forminput) via UUIDv1.

```jsx
import Bluelib from "../Bluelib";
import Form from "../Form";


<Bluelib>
    <Form>
        <FormElement label={"Username"} placeholder={"Steffo"} required/>
        <FormElement label={"Email"} type={"email"} placeholder={"me@steffo.eu"}/>
        <FormElement label={"Password"} type={"password"} placeholder={"hunter2"} required/>
        <FormElement label={"Phone"} type={"tel"} placeholder={"+39 123 456 7890"}/>
        <FormElement label={"Antani"} placeholder={"eh?"} disabled/>
    </Form>
</Bluelib>
```
