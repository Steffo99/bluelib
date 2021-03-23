A clickable button that should trigger an action on click.

```jsx
import Bluelib from "../Bluelib";
import Color from "../Color";

<Bluelib>
    <p>
        <Button onClick={event => console.debug(event)}>
            Click here
        </Button>
    </p>
    <p>
        <Color builtin="blue">
            <Button onClick={event => console.debug(event)}>
                such blue wow
            </Button>
        </Color>
    </p>
    <p>
        <Button disabled={true}>
            Disabled
        </Button>
    </p>
</Bluelib>
```
