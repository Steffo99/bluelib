import * as React from "react"
import { BluelibTheme } from "../types"
import * as BluelibMapper from "../utils/BluelibMapper"
import Color from "color";
import * as Colors from "../utils/Colors"

import PaperTheme from "../bluelib/src/targets/paper.module.css"
import RoyalBlueTheme from "../bluelib/src/targets/royalblue.module.css"
import HackerTheme from "../bluelib/src/targets/hacker.module.css"
import SophonTheme from "../bluelib/src/targets/sophon.module.css"
import GestioneAmberTheme from "../bluelib/src/targets/amber.module.css"


const BuiltinThemes = {
    "paper": PaperTheme,
    "royalblue": RoyalBlueTheme,
    "hacker": HackerTheme,
    "sophon": SophonTheme,
    "amber": GestioneAmberTheme,
}


export interface UseBluelibOptions {
    theme?: BluelibTheme,
    backgroundColor?: typeof Color,
    foregroundColor?: typeof Color,
    accentColor?: typeof Color,
    linkColor?: typeof Color,
    brokenColor?: typeof Color,
    visitedColor?: typeof Color,
    downloadColor?: typeof Color,
    redColor?: typeof Color,
    orangeColor?: typeof Color,
    yellowColor?: typeof Color,
    limeColor?: typeof Color,
    cyanColor?: typeof Color,
    blueColor?: typeof Color,
    magentaColor?: typeof Color,
    grayColor?: typeof Color,
    polarity?: number,
}


export function useBluelib(ref: React.RefObject<HTMLElement>, options: UseBluelibOptions) {
    React.useEffect(
        () => {
            const target = ref.current
            if(!target) return

            let extraClassName: string[] = [
                BluelibMapper.rootToModule("bluelib"),
            ]
            if(options.theme) extraClassName.push(BuiltinThemes[options.theme]["bluelib"])

            let extraStyle: {[_: string]: number} = {}
            if(options.backgroundColor) extraStyle = {...extraStyle, ...Colors.colorToBluelibStyle("background", options.backgroundColor)}
            if(options.foregroundColor) extraStyle = {...extraStyle, ...Colors.colorToBluelibStyle("foreground", options.foregroundColor)}
            if(options.accentColor) extraStyle = {...extraStyle, ...Colors.colorToBluelibStyle("accent", options.accentColor)}
            if(options.linkColor) extraStyle = {...extraStyle, ...Colors.colorToBluelibStyle("link", options.linkColor)}
            if(options.brokenColor) extraStyle = {...extraStyle, ...Colors.colorToBluelibStyle("broken", options.brokenColor)}
            if(options.visitedColor) extraStyle = {...extraStyle, ...Colors.colorToBluelibStyle("visited", options.visitedColor)}
            if(options.downloadColor) extraStyle = {...extraStyle, ...Colors.colorToBluelibStyle("download", options.downloadColor)}
            if(options.redColor) extraStyle = {...extraStyle, ...Colors.colorToBluelibStyle("red", options.redColor)}
            if(options.orangeColor) extraStyle = {...extraStyle, ...Colors.colorToBluelibStyle("orange", options.orangeColor)}
            if(options.yellowColor) extraStyle = {...extraStyle, ...Colors.colorToBluelibStyle("yellow", options.yellowColor)}
            if(options.limeColor) extraStyle = {...extraStyle, ...Colors.colorToBluelibStyle("lime", options.limeColor)}
            if(options.cyanColor) extraStyle = {...extraStyle, ...Colors.colorToBluelibStyle("cyan", options.cyanColor)}
            if(options.blueColor) extraStyle = {...extraStyle, ...Colors.colorToBluelibStyle("blue", options.blueColor)}
            if(options.magentaColor) extraStyle = {...extraStyle, ...Colors.colorToBluelibStyle("magenta", options.magentaColor)}
            if(options.grayColor) extraStyle = {...extraStyle, ...Colors.colorToBluelibStyle("gray", options.grayColor)}

            target.classList.forEach((className) => {
                if(Object.values(BuiltinThemes).map(a => a["bluelib"]).includes(className)) {
                    target.classList.remove(className)
                }
            })
            extraClassName.forEach((className) => {
                target.classList.add(className)
            })
            
            Object.entries(extraStyle).forEach(([k, v]) => {
                target.style.setProperty(k, v.toString(), "")
            })
        },
        [ref, options]
    )
}