import {useStore} from "react-redux";
import chartdata from "./components/chartdata/chartdata"
import RechartDiv from "./components/rechart/rechart";
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
                let items = api_data;
                let chart_data = chartdata(items);
                let return_content = <div id="main">
                    <h1>Covid situation in Hungary </h1>
                    <div className="container-fluid">
                        <div className="row">
                            <RechartDiv chartoptions={chart_data} charttype="bar"/>
                            <RechartDiv chartoptions={chart_data} charttype="area"/>
                            <RechartDiv chartoptions={chart_data}/>
                        </div>
                    </div>
                </div>
                setReturncontent(return_content)
            } else {
                return <div></div>
            }
        });
    }, []);

    return <div>{returncontent}</div>
}

export default App;
