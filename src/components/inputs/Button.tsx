import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface ButtonProps extends Types.BluelibHTMLProps<HTMLButtonElement> {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,

    children: React.ReactNode,
}


export function Button({onClick, disabled, children, ...props}: ButtonProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "input", "input-button")

    const onClickWrapped = disabled ? () => {} : onClick

    return (
        <BaseElement kind={"button"} type={"button"} onClick={onClickWrapped} disabled={disabled} {...props}>{children}</BaseElement>
    )
}
