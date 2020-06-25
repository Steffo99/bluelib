import RoyalnetInstanceUrl from '../contexts/RoyalnetInstanceUrl';
import LoginStatus from "../contexts/RoyalnetLoginStatus";
import {useContext, useState} from 'preact/hooks';
import useDeepCompareEffect from "use-deep-compare-effect";
import {royalnetApiRequest} from '../utils/royalnetApiRequest';


export default function(method, path, body) {
    const instanceUrl = useContext(RoyalnetInstanceUrl);
    const loginStatus = useContext(LoginStatus);
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [instanceTesterAbort, setInstanceTesterAbort] = useState(null);

    if(body === undefined) {
        body = {}
    }

    if(loginStatus !== null) {
        body["token"] = loginStatus["token"]
    }

    function refresh() {
        console.debug(`Refresh: ${instanceUrl} | ${method} | ${path} | ${body}`)

        setData(undefined);
        setError(undefined);

        if(instanceTesterAbort !== null) {
            instanceTesterAbort.abort();
        }
        let abort = new AbortController();
        setInstanceTesterAbort(abort);

        royalnetApiRequest(instanceUrl, method, path, body, abort.signal).then(
            d => setData(d)
        ).catch(
            e => setError(e)
        );
    }

    useDeepCompareEffect(() => {
        refresh();
    }, [instanceUrl, method, path, body]);

    return [data, error, refresh];
}
