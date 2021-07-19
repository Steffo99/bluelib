import React, { useMemo } from "react"
import PropTypes from "prop-types"
import UUID from "uuid";
import FormLabel from "./FormLabel"
import FormField from "./FormField"


export default function FormElement({label, labelProps, className, required, ...props}) {
    let element_id = useMemo(() => UUID.v1(), []);

    if(!required) {
        label = <i>{label}</i>
    }

    return <>
        <FormLabel
            htmlFor={element_id}
            {...labelProps}
        >
            {label}
        </FormLabel>
        <FormField
            id={element_id}
            {...props}
        />
    </>
}


FormElement.propTypes = {
    label: PropTypes.string,
    labelProps: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
}
