import {useEffect, useState} from "react";
import axios from "axios";

const Apireader = () => {

    const [items, setItems] = useState({});

    useEffect( () => {
        async function fetchData() {
            try {
                const res = await axios.get('https://api.apify.com/v2/key-value-stores/RGEUeKe60NjU16Edo/records/LATEST?disableRedirect=true');
                setItems(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
    return ({items})
}

export default Apireader