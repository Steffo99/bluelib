import RoyalnetInstanceUrl from '../contexts/RoyalnetInstanceUrl';
import {useContext, useState} from 'preact/hooks';
import {royalnetApiRequest} from '../utils/royalnetApiRequest';
import useDeepCompareEffect from "use-deep-compare-effect";


export default function(method, path, body) {
    const instanceUrl = useContext(RoyalnetInstanceUrl);
    const [data, setData] = useState(undefined);

    useDeepCompareEffect(() => {
        royalnetApiRequest(instanceUrl, method, path, body).then(d => setData(d));
    }, [instanceUrl, method, path, body]);

    return data;
}
