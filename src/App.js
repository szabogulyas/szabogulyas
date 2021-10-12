import {useStore} from "react-redux";
import Maincontent from "./components/maincontent/maincontent";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";

function App() {

    let store = useStore();
    function loadCurrentState(store) {
        return store.getState();
    }

    const [returncontent, setReturncontent] = useState('');

    useEffect(() => {
        loadCurrentState(store).then(function (result) {
            if (typeof result === 'object' && Object.keys(result).length > 0) {
                setReturncontent(<Maincontent api_items={result}/>);
            }
        });
    }, []);

    return <div>{returncontent}</div>
}

export default App;
