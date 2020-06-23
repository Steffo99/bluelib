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

    if(body === undefined) {
        body = {}
    }

    if(loginStatus !== null) {
        body["token"] = loginStatus["token"]
    }

    function refresh() {
        setData(undefined);
        setError(undefined);
        royalnetApiRequest(instanceUrl, method, path, body).then(d => setData(d)).catch((e => setError(e)));
    }

    useDeepCompareEffect(() => {
        royalnetApiRequest(instanceUrl, method, path, body).then(d => setData(d)).catch((e => setError(e)));
    }, [instanceUrl, method, path, body]);

    return [data, error, refresh];
}
