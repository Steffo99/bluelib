import * as React from "react"
import Color from "color"
import {Argument as ClassNamesArgument} from "classnames"


export type ClassNames = ClassNamesArgument


export type State<Value> = [Value, React.Dispatch<React.SetStateAction<Value>>]


export interface BluelibProps {
    bluelibClassNames?: ClassNames,
    customColor?: typeof Color,
    disabled?: boolean,
}


export interface BluelibHTMLProps<Element extends HTMLElement> extends BluelibProps, React.HTMLProps<Element> {}


/**
 * An optionally async function that checks if a value is acceptable for a certain form field or not.
 *
 * See {@link Validity} to see the acceptable return values of the function.
 *
 * An {@link AbortSignal} is passed to the function to allow it to handle teardowns, allowing it to stop HTTP requests if the previous value is torn down.
 */
export type Validator<T> = (value: T, abort: AbortSignal) => Promise<Validity> | Validity

/**
 * The possible return values of a {@link Validator}.
 *
 * - `true` means that the value is acceptable for the field;
 * - `false` means that the value contains an error and should not be accepted;
 * - `undefined` means that the value has no meaning and wasn't checked (such as in the case of an empty form field);
 * - `null` means that the value is in progress of being checked.
 */
export type Validity = boolean | null | undefined


/**
 * Bluelib's builtin colors, as strings.
 */
export type BuiltinColor = "red" | "orange" | "yellow" | "lime" | "cyan" | "blue" | "magenta" | "gray"
