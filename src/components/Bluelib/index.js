import React from "react";
import BluelibProvider from "./BluelibProvider";
import BluelibContainer from "./BluelibContainer";
import PropTypes from "prop-types";


export default function Bluelib({className, children, skin}) {
    return (
        <BluelibProvider skin={skin}>
            <BluelibContainer className={className}>
                {children}
            </BluelibContainer>
        </BluelibProvider>
    )
}


Bluelib.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    skin: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}
