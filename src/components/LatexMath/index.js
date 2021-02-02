import React from "react";
import "katex/dist/katex.css";
import TeX from '@matejmazur/react-katex';
import PropTypes from "prop-types";


export default function LatexMath({children, block}) {
    return (
        <TeX math={children} block={block}/>
    )
}


LatexMath.propTypes = {
    children: PropTypes.node,
    block: PropTypes.bool
}