A **panel** which splits horizontally the contained panels into multiple columns of the same size (if possible).

```jsx
import Bluelib from "../Bluelib";
import Box from "../Box";

<Bluelib>
    <Box>
        1 / 1
    </Box>
    
    <Split>
        <Box>
            1 / 2
        </Box>
        <Box>
            2 / 2
        </Box>
    </Split>
    
    <Split>
        <Box>
            1 / 3
        </Box>
        <Box>
            2 / 3
        </Box>
        <Box>
            3 / 3
        </Box>        
    </Split>
    
    <Split>
        <Box>
            1 / 4
        </Box>
        <Box>
            2 / 4
        </Box>
        <Box>
            3 / 4
        </Box>
        <Box>
            4 / 4
        </Box>
    </Split>
</Bluelib>
```
