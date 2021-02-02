A displayer of debug information.

```jsx
import Bluelib from "../Bluelib";

<Bluelib>
    <div>
        <VisualLog level={"debug"}>
            Debug: Shields are active.
        </VisualLog>
    </div>

    <div>
        <VisualLog level={"info"}>
            Info: Asteroid approaching.
        </VisualLog>
    </div>

    <div>
        <VisualLog level={"warning"}>
            Warning: An asteroid damaged our shield.
        </VisualLog>
    </div>

    <div>
        <VisualLog level={"error"}>
            Error: Shields are not responsive.
        </VisualLog>
    </div>
</Bluelib>
```
