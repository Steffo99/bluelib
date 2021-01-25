import React from "react";
import { MathComponent } from 'mathjax-react'
import PropTypes from "prop-types";


export default function LatexMath({children, block}) {
    return (
        <MathComponent tex={children} display={block ?? false}/>
    )
}


LatexMath.propTypes = {
    children: PropTypes.node,
    block: PropTypes.bool
}