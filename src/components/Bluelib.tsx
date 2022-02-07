import * as React from "react"
import * as Types from "../types"
import * as Splitter from "../utils/Splitter"

import {BaseElement} from "./BaseElement"
import {useBluelib, UseBluelibOptions} from "../hooks/useBluelib"


export interface BluelibProps extends Types.BluelibHTMLProps<HTMLDivElement>, UseBluelibOptions {}


export const Bluelib = (props: BluelibProps): JSX.Element => {

    const [useBluelibOptions, baseElementProps] = Splitter.splitInTwo(props, [
        "theme",
        "backgroundColor",
        "foregroundColor",
        "accentColor",
        "linkColor",
        "brokenColor",
        "visitedColor",
        "downloadColor",
        "redColor",
        "orangeColor",
        "yellowColor",
        "limeColor",
        "cyanColor",
        "blueColor",
        "magentaColor",
        "grayColor",
        "polarity",
    ])

    const ref = React.useRef<HTMLDivElement>(null)
    const element = React.useMemo(
        () => (
            <BaseElement
                ref={ref}
                kind={"div"}
                bluelibClassNames={"bluelib"}
                {...baseElementProps}
            />
        ),
        [ref, baseElementProps]
    )

    useBluelib(ref, useBluelibOptions)

    return element
}

Bluelib.Element = BaseElement
