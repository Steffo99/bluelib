Change the **bluelib color** of the contained elements.

The color can chosen through either the `builtin` prop or the `custom` prop. 

By using the `builtin` prop, the color will automatically adapt itself to the theme. Possible builtin colors are:
- `"red"`
- `"orange"`
- `"yellow"`
- `"lime"`
- `"cyan"`
- `"blue"`
- `"magenta"`
- `"gray"`

By using the `custom` prop, the color will be the same for all themes, but you will be able to specify any color.

```jsx
import Bluelib from "../Bluelib";
import Box from "../Box";

<Bluelib>
    <div>
        <Color builtin={"red"}>
            <span>
                Red
            </span>
        </Color>
    </div>
    <div>
        <Color builtin={"orange"}>
            <Box>
                Orange
            </Box>
        </Color>
    </div>
    <div>
        <Color custom={"#ffff00"}>
            <Box>
                Custom yellow
            </Box>
        </Color>
    </div>
</Bluelib>
```
