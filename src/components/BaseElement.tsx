import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../types"
import * as Colors from "../utils/Colors"
import * as BluelibMapper from "../utils/BluelibMapper"
import Color from "color"
import mergeClassNames, {Argument as ClassNamesArgument} from "classnames"


export interface BaseElementProps extends React.HTMLProps<any> {
    kind: string,
    bluelibClassNames?: Types.ClassNames,
    disabled?: boolean,
    customColor?: typeof Color,
}


export function BaseElement({kind = "div", bluelibClassNames, disabled = false, customColor, ...props}: BaseElementProps): JSX.Element {
    // Set the Bluelib color
    if(customColor) {
        props.style = {...props.style, ...Colors.colorToBluelibStyle("color", customColor)}
    }

    // Possibly disable the element
    bluelibClassNames = mergeClassNames(bluelibClassNames, disabled ? "status-disabled" : "")
    // @ts-ignore
    props.disabled = disabled

    // Map regular class names to module class names
    bluelibClassNames = BluelibMapper.rootToModule(bluelibClassNames)
    props.className = mergeClassNames(props.className, bluelibClassNames)

    return React.createElement(kind, props)
}
