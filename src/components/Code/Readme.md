A **code block** which strips excess indentation and applies syntax highlighting.

> Appearently explodes if `String.raw` is used. Wat?

```jsx
import {atomOneLight} from "react-syntax-highlighter/dist/cjs/styles/hljs";

<Code language={"python"} skin={atomOneLight}>
    {`
        def hello():
            print("Hello world!")
    `}
</Code>
```
