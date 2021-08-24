import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {Option} from "./Option";
import {OptionGroup} from "./OptionGroup";


export interface MultiselectProps extends Types.BluelibHTMLProps<HTMLSelectElement> {
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    onSimpleChange?: (value: string[]) => void,
    value?: string[],
}


export function Multiselect({onChange, onSimpleChange, ...props}: MultiselectProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input", "input-multiselect")

    const onChangeWrapped = React.useCallback(
        event => {
            if(onChange) onChange(event)
            if(onSimpleChange) onSimpleChange(Array.from<HTMLOptionElement>(event.target.selectedOptions).map(option => option.value))
        },
        [onChange, onSimpleChange]
    )

    return (
        <BaseElement kind={"select"} multiple={true} onChange={onChangeWrapped} {...props}/>
    )
}


Multiselect.Option = Option
Multiselect.Group = OptionGroup
