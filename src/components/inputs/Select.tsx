import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {SelectContext} from "./SelectContext";


interface SelectProps {
    disabled?: boolean,

    onChange?: (contents: string) => boolean,

    children: React.ReactNode,

    [props: string]: any,
}


export function Select({onChange, ...props}: SelectProps): JSX.Element {

    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input", "input-select")

    const onChangeWrapper = React.useCallback(

        (event: React.ChangeEvent<HTMLInputElement>): boolean => {
            const contents = event.target.value

            if(onChange) {
                return onChange(contents)
            }

            return false
        },

        [onChange]
    )

    return (
        <BaseElement kind={"select"} multiple={false} onChange={onChangeWrapper} {...props}/>
    )
}
