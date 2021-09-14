import * as React from "react"
import {useCallback, useMemo} from "react"


/**
 * Hook similar to {@link useCallback} that converts a syncronous function into an asyncronous one.
 *
 * @todo Improve this docstring.
 * @todo I have no idea of how to write this in TypeScript.
 * @param func The function to convert.
 */
export function usePromise(func) {
    return useMemo(
        () => {
            return async (...args) => await func(...args)
        },
        [func]
    )
}