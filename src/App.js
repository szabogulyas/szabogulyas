import {useStore} from "react-redux";
import Maincontent from "./components/maincontent/maincontent";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";

function App() {

    let store = useStore();
    function loadCurrentState(store) {
        let current_state = store.getState();
        return current_state;
    }

    const [returncontent, setReturncontent] = useState('');

    useEffect(() => {
        loadCurrentState(store).then(function (result) {
            let api_data = result;
            if (typeof api_data === 'object' && Object.keys(api_data).length > 0) {
                let return_content = <Maincontent api_items={api_data}/>
                setReturncontent(return_content);
            } else {
                return <div></div>
            }
        });
    }, []);

    return <div>{returncontent}</div>
}

export default App;
