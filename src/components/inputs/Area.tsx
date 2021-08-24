import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface AreaProps extends Types.BluelibHTMLProps<HTMLTextAreaElement> {
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    onSimpleChange?: (value: string) => void,
    value?: string,
}


export function Area({onChange, onSimpleChange, ...props}: AreaProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input", "input-area")

    const onChangeWrapped = React.useCallback(
        event => {
            if(onChange) onChange(event)
            if(onSimpleChange) onSimpleChange(event.target.value)
        },
        [onChange, onSimpleChange]
    )

    return (
        <BaseElement kind={"textarea"} onChange={onChangeWrapped} {...props}/>
    )
}
