import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../types"
import * as Colors from "../utils/Colors"
import * as BluelibMapper from "../utils/BluelibMapper"
import Color from "color"
import mergeClassNames, {Argument as ClassNamesArgument} from "classnames"


export interface BaseElementProps {
    kind: Types.ComponentKind,
    bluelibClassNames?: Types.ClassNames,
    customColor?: typeof Color,
    disabled?: boolean,

    [props: string]: any,
}


export function BaseElement({kind, bluelibClassNames, customColor, ...props}: BaseElementProps): JSX.Element {
    // Set the Bluelib color
    if(customColor) props.style = {...props.style, ...Colors.colorToBluelibStyle("color", customColor)}

    // Possibly disable the element
    if(props.disabled) bluelibClassNames = mergeClassNames(bluelibClassNames, "status-disabled")

    // Map regular class names to module class names
    bluelibClassNames = BluelibMapper.rootToModule(bluelibClassNames)
    props.className = mergeClassNames(props.className, bluelibClassNames)

    // Dynamically determine the element kind
    const Kind = kind

    return <Kind {...props}/>
}
