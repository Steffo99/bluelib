import * as React from "react";

export type {Argument as ClassNames} from "classnames"

// export type IntrinsicComponentKind = JSX.IntrinsicElements
// export type FunctionComponentKind = (props: object) => JSX.Element
// export type ClassComponentKind = typeof React.Component
// export type ComponentKind = IntrinsicComponentKind | FunctionComponentKind | ClassComponentKind
export type ComponentKind = any



export type UseStateContext<S> = React.Context<null | [S, React.Dispatch<React.SetStateAction<S>>]>