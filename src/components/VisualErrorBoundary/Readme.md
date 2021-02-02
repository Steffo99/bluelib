A basic error boundary which detects errors and displays them.

```jsx
import Bluelib from "../Bluelib";

function ErrorMaker() {
    throw new Error("ErrorMaker threw an error.");
}

<Bluelib>
    <VisualErrorBoundary>
        <ErrorMaker/>
    </VisualErrorBoundary>
</Bluelib>
```
