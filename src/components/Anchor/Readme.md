An `<a>` element using the `element-anchor` Bluelib class, to be used for anchors (`[href^="#"]`) and links (`[href^=http`).

Can be disabled using the `disabled` prop.

```jsx
import Bluelib from "../Bluelib";

<Bluelib>
    <div>
        <Anchor href={"https://example.org"}>
            Go to example.org!
        </Anchor>
    </div>
    <div>
        <Anchor href={"https://google.com"} disabled={true}>
            Don't go to Google, it will track you!
        </Anchor>
    </div>
</Bluelib>
```
