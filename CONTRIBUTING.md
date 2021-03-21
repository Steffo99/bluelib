# Contributing

Feel free to contribute to bluelib at any time, adding new rules, themes or anything else through [pull requests](https://github.com/RYGhub/bluelib/pulls)!

## Structure

- [src](src) contains the project source
    - [rules](src/rules) are the [Less rules](http://lesscss.org/#nesting) for bluelib, which should use exclusively variables as selectors (`@{var} {...}`)
        - [skeleton](src/rules/skeleton.less) is always imported, and defines the base rules of bluelib, such as layout, padding, margins, etc.
        - [rygblue](src/rules/rygblue.less) is a theme: its import is optional, and only defines rules such as fonts and colors
    - [vars](src/vars) contains files with [Less variables](http://lesscss.org/features/#variables-feature) which define the selectors for every rule previously defined
        - [module](src/vars/module.less) defines selectors only by using unique classes, with the exception of `@all`, which selects `.bluelib *`; it's ideal for usage with [CSS Modules](https://github.com/css-modules/css-modules) and [React](https://reactjs.org)
        - [root](src/vars/root.less) applies rules to the whole page by applying selectors directly to HTML elements such as `section` and `blockquote`; it's ideal for basic websites which do not mix multiple styles
    - [targets](src/targets) contains Less files which import a single _var_ file followed by a single _rule_ file, and the CSS files resulting from their compilation
        - [rygblue.module.less](src/targets/rygblue.module.less) imports the `module` var file followed by the `rygblue` rules file
        - and so on

## Compiling

To compile a bluelib target, run:

```bash 
lessc ${1} ${1%.*}.css --source-map
```
