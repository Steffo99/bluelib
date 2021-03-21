# Contributing

Feel free to contribute to bluelib at any time, adding new rules, themes or anything else through [pull requests](https://github.com/RYGhub/bluelib/pulls)!

## Structure

- [src](src) contains the project source
    - [components](src/components) contains all components provided by this module with the following structure
        - `Component`, a folder with the name of the component
            - `index.js`, a JSX file default-exporting the React component
            - `Readme.md`, a Markdown file which contains the text to be displayed in the documentation; code blocks additionally act as examples where the component is automatically imported, allowing the developer to edit them in real time
    - [contexts](src/contexts) contains all React contexts used by this module
    - [hooks](src/hooks) contains all custom React hooks used by this module
    - [utils](src/utils) contains miscellaneous functions with a variety of uses

## Compiling

To build this module, run:

```bash 
npm run build
```

## Publish

To publish this module on npm, run:

```bash
npm publish
```
