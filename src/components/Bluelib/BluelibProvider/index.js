import React from "react"

import skinRygblue from "../../../bluelib/src/targets/rygblue.module.css"
import ContextBluelibSkin from "../../../contexts/ContextBluelibSkin"
import isString from "../../../utils/isString"
import PropTypes from "prop-types"


const builtinSkins = {
    "rygblue": skinRygblue
}


export default function BluelibProvider({skin, children}) {
    // If the skin is a string, try to get the corresponding builtin skin
    if (isString(skin)) {
        skin = builtinSkins[skin]
    }

    return (
        <ContextBluelibSkin.Provider value={skin}>
            {children}
        </ContextBluelibSkin.Provider>
    )
}


BluelibProvider.propTypes = {
    skin: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    children: PropTypes.node,
}
