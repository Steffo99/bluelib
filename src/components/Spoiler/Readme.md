Hides its contents until the mouse is over the element.

```jsx
import Bluelib from "../Bluelib";
import Box from "../Box";
import Split from "../Split";

<Bluelib>
    <Split>
        <Box>
            <Spoiler>
                Only the text is hidden.
            </Spoiler>
        </Box>
        <Spoiler>
            <Box>
                The whole box is hidden!
            </Box>
        </Spoiler>
    </Split>
</Bluelib>
```
