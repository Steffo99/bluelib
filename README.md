# `bluelib-react`

React bindings for [`bluelib@3`](https://github.com/Steffo99/bluelib)

## Documentation

An interactive documentation for `bluelib-react` is available [here](http://gh.steffo.eu/bluelib-react/), built using [Storybook](https://storybook.js.org/).

## Installation

You can download `bluelib-react` using your favourite node package manager:

```console
$ npm install --save @steffo/bluelib-react
```

```console
$ yarn add @steffo/bluelib-react
```

Ensure you have `react` and `react-dom` installed, as they are peer dependencies of this package and aren't installed automatically.

## Usage

You can import the components you want to use using the ES6 import syntax:

```js
import { Box } from "@steffo/bluelib-react"
```

**All** Bluelib components must be **inside a `<Bluelib>` container** for them to work correctly!

```jsx
import { Bluelib, Heading, Box } from "@steffo/bluelib-react"


const MyComponent = props => (
    <Bluelib theme={"royalblue"}>
        <Heading level={1}>
            Hello world!
        </Heading>
        <Box>
            Welcome to Bluelib!
        </Box>
    </Bluelib>
)
```