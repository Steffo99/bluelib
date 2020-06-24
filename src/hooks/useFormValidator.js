import { useEffect, useState } from 'preact/hooks';
import ValidityStatus from "../enums/Validity";

export default function(value, validator) {
    const [status, setStatus] = useState({
        validity: ValidityStatus.NONE,
        message: ""
    });

    useEffect(() => {
        validator(value, setStatus);
    }, [value]);

    return status;
}
