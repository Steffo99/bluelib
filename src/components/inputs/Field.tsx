import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface FieldProps extends Types.BluelibHTMLProps<HTMLInputElement> {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onSimpleChange?: (value: string) => void,
    value?: string,
}


export function Field({onChange, onSimpleChange, ...props}: FieldProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input", "input-field")

    const onChangeWrapped = React.useCallback(
        event => {
            if(onChange) onChange(event)
            if(onSimpleChange) onSimpleChange(event.target.value)
        },
        [onChange, onSimpleChange]
    )

    return (
        <BaseElement kind={"input"} onChange={onChangeWrapped} {...props}/>
    )
}
