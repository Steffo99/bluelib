import React from "react"
import "katex/dist/katex.css"
import TeX from '@matejmazur/react-katex'
import PropTypes from "prop-types"


export default function LatexMath({children, block, ...props}) {
    return (
        <TeX math={children} block={block} {...props}/>
    )
}


LatexMath.propTypes = {
    children: PropTypes.node,
    block: PropTypes.bool
}