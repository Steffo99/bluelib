import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../types"
import * as Colors from "../utils/Colors"
import * as BluelibMapper from "../utils/BluelibMapper"
import classNames, {Argument as ClassNamesArgument} from "classnames"


export interface BaseElementProps {
    kind: Types.ComponentKind,
    bluelibClassNames?: Types.ClassNames,
    color?: Colors.AnyColor,

    [props: string]: any,
}


export function BaseElement({kind, bluelibClassNames, color, ...props}: BaseElementProps): JSX.Element {
    // Set the Bluelib color
    if(typeof color === "string") bluelibClassNames += ` ${color}`
    else if(color) props.style = {...props.style, ...Colors.colorToBluelibStyle("color", color)}

    // Map regular class names to module class names
    bluelibClassNames = BluelibMapper.rootToModule(bluelibClassNames)
    props.className = classNames(props.className, bluelibClassNames)

    // Dynamically determine the element kind
    const Kind = kind

    return <Kind {...props}/>
}
