A Blockquote [Panel](#panel), using the `panel-blockquote` Bluelib class.

```jsx
import Bluelib from "../Bluelib";

<Bluelib>
    <Blockquote>
        This is a blockquote.
    </Blockquote>
</Bluelib>
```

Blockquotes support the same props [Panel](#panel)s do, such as `title` and `kind`:

```jsx
import Bluelib from "../Bluelib";

<Bluelib>
    <Blockquote title={"Hello world!"}>
        This blockquote has a title, even if they usually shouldn't have one.
    </Blockquote>
</Bluelib>
```

As with [Panel](#panel)s, Blockquotes can be wrapped in [Color](#color) elements to paint them a different color:

```jsx
import Bluelib from "../Bluelib";
import Color from "../Color";

<Bluelib>
    <Color builtin={"red"}>
        <Blockquote>
            See? Red! No, wait, that's blood...
        </Blockquote>
    </Color>
    <Color custom={"#123456"}>
        <Blockquote>
            He'll turn RED any second now...
        </Blockquote>
    </Color>
</Bluelib>
```
