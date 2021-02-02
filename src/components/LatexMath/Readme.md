Render a Latex math string.

It can be displayed in block format by setting the `block` prop to `true`.

```jsx
import LatexMath from "./index";

<div>
    <p>
        You can calculate the volume of a sphere with:
    </p>
    <LatexMath block={true}>{`\\frac{4}{3} \\pi r^3`}</LatexMath>
    <p>
        (Don't confuse it with the area, which is <LatexMath>{`4 \\pi r^2`}</LatexMath>!)
    </p>
    <p>
        Do you know what <code>abs()</code> is?
    </p>
    <LatexMath block={true}>{`
        | x | = \\begin{cases}
            x \\qquad x > 0\\\\
            0 \\qquad x = 0\\\\
            -x \\qquad x < 0
        \\end{cases}
    `}</LatexMath>
</div>
```
