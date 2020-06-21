import RoyalnetInstanceUrl from '../contexts/RoyalnetInstanceUrl';
import {useContext, useState} from 'preact/hooks';
import {royalnetApiRequest} from '../utils/royalnetApiRequest';
import useDeepCompareEffect from "use-deep-compare-effect";


export default function(method, path, body) {
    const instanceUrl = useContext(RoyalnetInstanceUrl);
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(undefined);

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
