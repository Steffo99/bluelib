A Box [Panel](#panel), using the `panel-box` Bluelib class.

```jsx
import Bluelib from "../Bluelib";

<Bluelib>
    <Box>
        This is a box.
    </Box>
</Bluelib>
```

Boxes support the same props [Panel](#panel)s do, such as `title` and `kind`:

```jsx
import Bluelib from "../Bluelib";

<Bluelib>
    <Box title={"Hello world!"}>
        This box has a title.
    </Box>
</Bluelib>
```

As with [Panel](#panel)s, Boxes can be wrapped in [Color](#color) elements to paint them a different color:

```jsx
import Bluelib from "../Bluelib";
import Color from "../Color";

<Bluelib>
    <Color builtin={"red"}>
        <Box>
            See? Red! No, wait, that's blood...
        </Box>
    </Color>
    <Color custom={"#123456"}>
        <Box>
            He'll turn RED any second now...
        </Box>
    </Color>
</Bluelib>
```
