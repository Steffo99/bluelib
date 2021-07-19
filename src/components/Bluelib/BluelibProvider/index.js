import React from "react"

import skinPaper from "../../../bluelib/src/targets/paper.module.css"
import skinRoyalblue from "../../../bluelib/src/targets/royalblue.module.css"
import ContextBluelibSkin from "../../../contexts/ContextBluelibSkin"
import isString from "../../../utils/isString"
import PropTypes from "prop-types"


const builtinSkins = {
    "paper": skinPaper,
    "royalblue": skinRoyalblue,
    "rygblue": skinRoyalblue,
}


export default function BluelibProvider({skin, children}) {
    // If the skin is a string, try to get the corresponding builtin skin
    if (isString(skin)) {
        skin = builtinSkins[skin]
    }
    else {
        skin = builtinSkins["paper"]
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
