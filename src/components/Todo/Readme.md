An component which can be used to mark incomplete parts of the website.

Its contents are printed to the console with `console.debug`.

**[Doesn't currently use Bluelib](https://github.com/RYGhub/bluelib/issues/16), but is included as it is a very common component to implement.**

```jsx
<Todo>
    Write a better example!
</Todo>
```

It is also available in `block` form:

```jsx
import LatexMath from "../LatexMath";

<div>
    Useful for block formulas:
    <Todo block={true}>
        <LatexMath block={true}>{`
            1 + 1 = 2
        `}</LatexMath>
    </Todo>
</div>
```
