Format the text like a **title**, changing its font and centering it.

The size can be configured with the `size` prop:

- `xxl`
- `xl` (equivalent to `<h1>` and `<h2>`)
- `l` (equivalent to `<h3>`)
- `m` (equivalent to `<h4>` and regular text)
- `s` (equivalent to `<h5>`)
- `xs` (equivalent to `<h6>`)
- `xxs`

```jsx
import Bluelib from "../Bluelib";

<Bluelib>
    <Title size={"xxl"}>
        First title
    </Title>
    <Title size={"xl"}>
        Second title
    </Title>
    <Title size={"l"}>
        Third title
    </Title>
    <Title size={"m"}>
        Fourth title
    </Title>
    <Title size={"s"}>
        Fifth title
    </Title>
    <Title size={"xs"}>
        Sixth title
    </Title>
    <Title size={"xxs"}>
        Seventh title
    </Title>
</Bluelib>
```
