A clickable button that should trigger an action on click.

```jsx
import Bluelib from "../Bluelib";
import Color from "../Color";

<Bluelib>
    <p>
        <ButtonToggle value={true}>
            On
        </ButtonToggle>
        &nbsp;
        <ButtonToggle value={false}>
            Off
        </ButtonToggle>
    </p>
    <p>
        <Color builtin="magenta">
            <ButtonToggle value={true}>
                On
            </ButtonToggle>
            &nbsp;
            <ButtonToggle value={false}>
                Off
            </ButtonToggle>
        </Color>
    </p>
    <p>
        <ButtonToggle disabled={true} value={true}>
            On
        </ButtonToggle>
        &nbsp;
        <ButtonToggle disabled={true} value={false}>
            Off
        </ButtonToggle>
    </p>
</Bluelib>
```
