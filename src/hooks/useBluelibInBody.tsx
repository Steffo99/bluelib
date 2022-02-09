import { useRef, useEffect } from "react"
import { BluelibTheme } from "../types"
import { useBluelib } from "./useBluelib"

export function useBluelibInBody(theme: BluelibTheme) {
    const ref = useRef<HTMLBodyElement | null>(null)
    useEffect(
        () => {
            ref.current = document.body as HTMLBodyElement
        },
        [ref]
    )

    useBluelib(ref, {
        theme,
    })
}