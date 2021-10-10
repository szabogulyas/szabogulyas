import {createStore} from "redux";

const ApiCaller = () => {
    return fetch("https://api.apify.com/v2/key-value-stores/RGEUeKe60NjU16Edo/records/LATEST?disableRedirect=true")
        .then(res => res.json())
        .then(json => { return json });
}

const store = createStore(ApiCaller);

export default store;