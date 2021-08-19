import * as React from "react"
import * as Types from "../../types"


export const MultiselectContext: Types.UseStateContext<string[]> = React.createContext(null) as Types.UseStateContext<string[]>
