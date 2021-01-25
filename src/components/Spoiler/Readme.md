Hides its contents until the mouse is over the element.

```jsx
import Bluelib from "../Bluelib";
import Box from "./index";
import Split from "./index";

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
