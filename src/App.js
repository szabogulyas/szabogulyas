import Apireader from "./components/apireader/apireader";
import chartdata from "./components/chartdata/chartdata"
import RechartDiv from "./components/rechart/rechart";

function App() {
    let api_data = Apireader();
    if (Object.keys(api_data.items).length > 0) {
        let items = api_data.items;
        let chart_data = chartdata(items);
        return (
            <div>
                <RechartDiv chartoptions={chart_data} charttype="bar"/>
                <RechartDiv chartoptions={chart_data} charttype="area"/>
                <RechartDiv chartoptions={chart_data}/>
            </div>
        );
    } else {
        return <div></div>
    }
}

export default App;
