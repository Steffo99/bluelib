import { useContext, useState } from 'preact/hooks';
import RoyalnetInstanceUrl from '../contexts/RoyalnetInstanceUrl';
import useFormValidator from "./useFormValidator";
import {royalnetApiRequest} from '../utils/royalnetApiRequest';
import ValidityStatus from "../enums/Validity";

const instanceUrlRegex = /^https?:\/\/.*?[^/]$/;

export default function() {
    const defaultInstanceUrl = useContext(RoyalnetInstanceUrl);
    const [instanceUrl, setInstanceUrl] = useState(defaultInstanceUrl);
    const [instanceTesterAbort, setInstanceTesterAbort] = useState(null);

    const instanceUrlStatus = useFormValidator(instanceUrl, (value, setStatus) => {
        if(value.length === 0) {
            setStatus({
                validity: ValidityStatus.NONE,
                message: ""
            });
            return;
        }

        if(!Boolean(instanceUrlRegex.test(value))) {
            setStatus({
                validity: ValidityStatus.ERROR,
                message: "Invalid URL"
            });
            return;
        }

        if(instanceTesterAbort !== null) {
            instanceTesterAbort.abort();
        }
        let abort = new AbortController();
        setInstanceTesterAbort(abort);

        royalnetApiRequest(value, "GET", "/api/royalnet/version/v1", undefined, abort.signal).then((data) => {
            if(value === instanceUrl) {
                setStatus({
                    validity: ValidityStatus.OK,
                    message: `Royalnet ${data["semantic"]}`
                });
            }
            else {
                console.log("wtf?")
            }
        }).catch((err) => {
            if(value === instanceUrl) {
                setStatus({
                    validity: ValidityStatus.ERROR,
                    message: "Royalnet not found"
                });
            }
        });
        setStatus({
            validity: ValidityStatus.CHECKING,
            message: "Checking..."
        });
    });

    return [instanceUrl, setInstanceUrl, instanceUrlStatus];
}
