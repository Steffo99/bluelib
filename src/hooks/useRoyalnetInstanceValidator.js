import { useContext, useState } from 'preact/hooks';
import RoyalnetInstanceUrl from '../contexts/RoyalnetInstanceUrl';
import useFormValidator from "./useFormValidator";
import apiRequest from '../utils/apiRequest';

const instanceUrlRegex = /^https?:\/\/.*?[^/]$/;

export default function() {
    const defaultInstanceUrl = useContext(RoyalnetInstanceUrl);
    const [instanceUrl, setInstanceUrl] = useState(defaultInstanceUrl);
    const [instanceTesterAbort, setInstanceTesterAbort] = useState(null);

    const instanceUrlStatus = useFormValidator(instanceUrl, (value, setStatus) => {
        if(value.length === 0) {
            setStatus({
                validity: null,
                message: ""
            });
            return;
        }

        if(!Boolean(instanceUrlRegex.test(value))) {
            setStatus({
                validity: false,
                message: "Invalid URL"
            });
            return;
        }

        if(instanceTesterAbort !== null) {
            instanceTesterAbort.abort();
        }
        let abort = new AbortController();
        setInstanceTesterAbort(abort);

        apiRequest(value, "GET", "/api/royalnet/version/v1", undefined, abort.signal).then((data) => {
            if(value === instanceUrl) {
                setStatus({
                    validity: true,
                    message: `Royalnet ${data["semantic"]}`
                });
            }
            else {
                console.log("wtf?")
            }
        }).catch((err) => {
            if(value === instanceUrl) {
                setStatus({
                    validity: false,
                    message: "Royalnet not found"
                });
            }
        });
        setStatus({
            validity: null,
            message: ""
        });
    });

    return [instanceUrl, setInstanceUrl, instanceUrlStatus];
}
