A Bluelib panel, using the `panel` class.

It doesn't do anything by itself: [Box](#box)es, [Blockquote](#blockquote)s and [Aside](#aside)s are based on panels.

```jsx
import Bluelib from "../Bluelib";

<Bluelib>
    <Panel>
        This is a generic panel.
    </Panel>
</Bluelib>
```

A `kind` prop can be specified to specify the base element: by default, panels use `<div>`s.

```jsx
import Bluelib from "../Bluelib";

<Bluelib>
    <Panel kind={"section"}>
        This panel uses section.
    </Panel>
</Bluelib>
```

A `title` prop can be specified to add a title to the panel:

```jsx
import Bluelib from "../Bluelib";

<Bluelib>
    <Panel title={"Hello world!"}>
        This panel has a title.
    </Panel>
</Bluelib>
```

Panels (like most other elements) can be wrapped in [Color](#color) elements to change their color:

```jsx
import Bluelib from "../Bluelib";
import Color from "../Color";

<Bluelib>
    <Color builtin={"red"}>
        <Panel>
            See? Red! No, wait, that's blood...
        </Panel>
    </Color>
    <Color custom={"#123456"}>
        <Panel>
            He'll turn RED any second now...
        </Panel>
    </Color>
</Bluelib>
```
