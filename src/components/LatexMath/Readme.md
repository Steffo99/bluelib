Render a Latex math string.

It can be displayed in block format by setting the `block` prop to `true`.

```jsx

<div>
    <p>
        You can calculate the volume of a sphere with:
    </p>
    <LatexMath block={true}>{`\\frac{4}{3} \\pi r^3`}</LatexMath>
    <p>
        (Don't confuse it with the area, which is <LatexMath>{`4 \\pi r^2`}</LatexMath>!)
    </p>
</div>
```
