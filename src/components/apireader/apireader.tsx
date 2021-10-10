import {useEffect, useState} from "react";
import axios from "axios";

function Apireader() {

    const [items, setItems] = useState({});

    async function fetchData() {
        try {
            const res = await axios.get('https://api.apify.com/v2/key-value-stores/RGEUeKe60NjU16Edo/records/LATEST?disableRedirect=true');
            setItems(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect( () => {
        fetchData();
    }, []);

    return ({items})
}

export default Apireader