import * as React from "react"
import * as Types from "../../types"


export const SelectContext: Types.UseStateContext<string> = React.createContext(null) as Types.UseStateContext<string>
