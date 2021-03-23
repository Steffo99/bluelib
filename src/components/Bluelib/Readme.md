The main component for Bluelib, composed by a [`<BluelibContainer>`](#bluelibcontainer) and a
[`<BluelibProvider>`](#bluelibprovider).

**Bluelib components won't work unless they're inside a `<Bluelib>` component!**

A skin can be selected by passing either a CSS module or a string to the `skin` prop.

Valid strings are:

- `"rygblue"`

```jsx
<Bluelib skin={"rygblue"}>
    Ciao!
</Bluelib>
```
