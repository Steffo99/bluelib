import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"
import {DetailsSummary} from "./DetailsSummary";
import {DetailsContent} from "./DetailsContent";


export interface DetailsProps extends Types.BluelibHTMLProps<HTMLDetailsElement> {}


export function Details({children, disabled, onClick, ...props}: DetailsProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "details")

    const onClickWrapper =
        React.useCallback(
            event => {
                if(disabled) {
                    event.preventDefault()
                }
                else if(onClick) {
                    onClick(event)
                }
            },
            [disabled, onClick]
        )

    return (
        <BaseElement kind={"details"} onClick={onClickWrapper} disabled={disabled} {...props}>
            {children}
        </BaseElement>
    )
}

Details.Summary = DetailsSummary
Details.Content = DetailsContent
