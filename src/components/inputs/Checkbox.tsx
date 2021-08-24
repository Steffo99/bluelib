import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface CheckboxProps extends Types.BluelibHTMLProps<HTMLInputElement> {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onSimpleChange?: (value: string, checked: boolean) => void,
    checked?: boolean,
    value: string,
}


export function Checkbox({onChange, onSimpleChange, ...props}: CheckboxProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input", "input-checkbox")

    const onChangeWrapped = React.useCallback(
        event => {
            if(onChange) onChange(event)
            if(onSimpleChange) onSimpleChange(event.target.value, event.target.checked)
        },
        [onChange, onSimpleChange]
    )

    return (
        <BaseElement kind={"input"} type={"checkbox"} onChange={onChangeWrapped} {...props}/>
    )
}
