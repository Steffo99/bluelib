import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface RadioProps extends Types.BluelibHTMLProps<HTMLInputElement> {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onSimpleChange?: (value: string) => void,
    checked?: boolean,
    value: string,
}


export function Radio({onChange, onSimpleChange, ...props}: RadioProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input", "input-radio")

    const onChangeWrapped = React.useCallback(
        event => {
            if(onChange) onChange(event)
            if(onSimpleChange) onSimpleChange(event.target.value)
        },
        [onChange, onSimpleChange]
    )

    return (
        <BaseElement kind={"input"} type={"radio"} onChange={onChangeWrapped} {...props}/>
    )
}
