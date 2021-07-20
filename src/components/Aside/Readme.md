An Aside [Panel](#panel), using the `panel-aside` Bluelib class.

```jsx
import Bluelib from "../Bluelib";

<Bluelib>
    <Aside>
        This is an aside.
    </Aside>
</Bluelib>
```

Asides support the same props [Panel](#panel)s do, such as `title` and `kind`:

```jsx
import Bluelib from "../Bluelib";

<Bluelib>
    <Aside title={"Hello world!"}>
        This aside has a title, even if they usually shouldn't have one.
    </Aside>
</Bluelib>
```

As with [Panel](#panel)s, Asides can be wrapped in [Color](#color) elements to paint them a different color:

```jsx
import Bluelib from "../Bluelib";
import Color from "../Color";

<Bluelib>
    <Color builtin={"red"}>
        <Aside>
            See? Red! No, wait, that's blood...
        </Aside>
    </Color>
    <Color custom={"#123456"}>
        <Aside>
            He'll turn RED any second now...
        </Aside>
    </Color>
</Bluelib>
```
