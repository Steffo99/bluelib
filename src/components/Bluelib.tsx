import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../types"
import * as Colors from "../utils/Colors"
import mergeClassNames from "classnames"
import {BaseElement} from "../abstract/BaseElement"
import PaperTheme from "../bluelib/src/targets/paper.module.css"
import RoyalBlueTheme from "../bluelib/src/targets/royalblue.module.css"
import HackerTheme from "../bluelib/src/targets/hacker.module.css"
import SophonTheme from "../bluelib/src/targets/sophon.module.css"


const BuiltinThemes = {
    "paper": PaperTheme,
    "royalblue": RoyalBlueTheme,
    "hacker": HackerTheme,
    "sophon": SophonTheme,
}


export interface BluelibProps {
    theme: "paper" | "royalblue" | "hacker" | "sophon",

    backgroundColor?: Colors.CustomColor,
    foregroundColor?: Colors.CustomColor,
    accentColor?: Colors.CustomColor,
    linkColor?: Colors.CustomColor,
    brokenColor?: Colors.CustomColor,
    visitedColor?: Colors.CustomColor,
    downloadColor?: Colors.CustomColor,
    redColor?: Colors.CustomColor,
    orangeColor?: Colors.CustomColor,
    yellowColor?: Colors.CustomColor,
    limeColor?: Colors.CustomColor,
    cyanColor?: Colors.CustomColor,
    blueColor?: Colors.CustomColor,
    magentaColor?: Colors.CustomColor,
    grayColor?: Colors.CustomColor,
    polarity?: number,

    [props: string]: any,
}


export function Bluelib({
    theme,
    backgroundColor,
    foregroundColor,
    accentColor,
    linkColor,
    brokenColor,
    visitedColor,
    downloadColor,
    redColor,
    orangeColor,
    yellowColor,
    limeColor,
    cyanColor,
    blueColor,
    magentaColor,
    grayColor,
    polarity,
    ...props
}: BluelibProps): JSX.Element {

    props.className = mergeClassNames(props.className, BuiltinThemes[theme]["bluelib"])

    console.debug(props.style)

    if(backgroundColor) props.style = {...props.style, ...Colors.colorToBluelibStyle("background", backgroundColor)}
    if(foregroundColor) props.style = {...props.style, ...Colors.colorToBluelibStyle("foreground", foregroundColor)}
    if(accentColor) props.style = {...props.style, ...Colors.colorToBluelibStyle("accent", accentColor)}
    if(linkColor) props.style = {...props.style, ...Colors.colorToBluelibStyle("link", linkColor)}
    if(brokenColor) props.style = {...props.style, ...Colors.colorToBluelibStyle("broken", brokenColor)}
    if(visitedColor) props.style = {...props.style, ...Colors.colorToBluelibStyle("visited", visitedColor)}
    if(downloadColor) props.style = {...props.style, ...Colors.colorToBluelibStyle("download", downloadColor)}
    if(redColor) props.style = {...props.style, ...Colors.colorToBluelibStyle("red", redColor)}
    if(orangeColor) props.style = {...props.style, ...Colors.colorToBluelibStyle("orange", orangeColor)}
    if(yellowColor) props.style = {...props.style, ...Colors.colorToBluelibStyle("yellow", yellowColor)}
    if(limeColor) props.style = {...props.style, ...Colors.colorToBluelibStyle("lime", limeColor)}
    if(cyanColor) props.style = {...props.style, ...Colors.colorToBluelibStyle("cyan", cyanColor)}
    if(blueColor) props.style = {...props.style, ...Colors.colorToBluelibStyle("blue", blueColor)}
    if(magentaColor) props.style = {...props.style, ...Colors.colorToBluelibStyle("magenta", magentaColor)}
    if(grayColor) props.style = {...props.style, ...Colors.colorToBluelibStyle("gray", grayColor)}
    if(polarity) props.style["--bluelib-polarity"] = polarity

    return (
        <BaseElement
            kind={"div"}
            bluelibClassNames={"bluelib"}
            {...props}
        />
    )
}
