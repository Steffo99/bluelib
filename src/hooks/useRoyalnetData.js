import RoyalnetInstanceUrl from '../contexts/RoyalnetInstanceUrl';
import {useContext, useEffect, useState} from 'preact/hooks';
import {royalnetApiRequest} from '../utils/royalnetApiRequest';


export default function(method, path, body) {
    const instanceUrl = useContext(RoyalnetInstanceUrl);
    const [data, setData] = useState(undefined);

    useEffect(() => {
        royalnetApiRequest(instanceUrl, method, path, body).then(d => setData(d));
    }, [instanceUrl, method, path, body]);

    return data;
}
