import { useEffect, useState } from 'preact/hooks';

export default function(value, validator) {
    const [status, setStatus] = useState({
        validity: null,
        message: ""
    });

    useEffect(() => {
        validator(value, setStatus);
    }, [value]);

    return status;
}
