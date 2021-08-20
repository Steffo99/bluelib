import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


interface AreaProps {
    placeholder: string,
    required?: boolean,
    disabled?: boolean,

    onChange: (contents: string) => boolean,
    value?: string,

    [props: string]: any,
}


export function Area({onChange, ...props}: AreaProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input", "input-area")

    const onChangeWrapper = React.useCallback(

        (event: React.ChangeEvent<HTMLTextAreaElement>): boolean => {
            const contents = event.target.value

            if(onChange) {
                return onChange(contents)
            }

            return false
        },

        [onChange]
    )

    return (
        <BaseElement kind={"textarea"} onChange={onChangeWrapper} {...props}/>
    )
}
