import * as React from "react"
import {useState} from "react"
import {Validator, Validity} from "../types"
import {usePromise} from "./usePromise";


/**
 * The return type of the {@link useFormState} hook.
 */
export type FormState<T> = {
    value: T,
    onSimpleChange: React.Dispatch<React.SetStateAction<T>>,
    validity: Validity,
}


/**
 * Hook similar to {@link useState} for handling the validation of form fields.
 *
 * @param def - Default value for the state.
 * @param validator - The {@link Validator} to apply.
 */
export function useFormState<T>(def: T, validator: Validator<T>): FormState<T> {
    const [value, setValue]
        = React.useState(def)

    const [validity, setValidity]
        = React.useState<Validity>(null)

    const trueValidator
        = usePromise(validator)

    const validate
        = React.useCallback(
            async (value: T, abort: AbortSignal) => {
                setValidity(null)
                let result: Validity
                try {
                    result = await trueValidator(value, abort)
                }
                catch(_) {
                    result = false
                }
                if(!abort.aborted) {
                    setValidity(result)
                }
            },
            []
        )

    React.useEffect(
        () => {
            const abort = new AbortController()
            validate(value, abort.signal)

            return () => {
                abort.abort()
            }
        },
        [validate, value]
    )

    return {value, onSimpleChange: setValue, validity}
}
