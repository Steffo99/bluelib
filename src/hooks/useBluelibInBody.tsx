import { useRef, useEffect } from "react"
import { useBluelib } from "./useBluelib"

export function useBluelibInBody(theme) {
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