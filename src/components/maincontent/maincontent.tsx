import chartdata from "../chartdata/chartdata"
import RechartDiv from "../rechart/rechart";

function timeStamp(given_date : any) {
    let now = given_date;
    let date = [now.getFullYear(), now.getMonth() + 1, now.getDate()].map(d => d.toString().length === 1 ? "0" + d : d);
    let time = [now.getHours(), now.getMinutes()].map(d => d.toString().length === 1 ? "0" + d : d);
    return date.join(".") + " " + time.join(":");
}

function Maincontent(api_data: any) {

    let chart_data_one = chartdata(api_data.api_items, ["activeInfected", "deceased", "quarantined"]);
    let chart_data_two = chartdata(api_data.api_items, ["infected", "recovered", "tested"]);
    let chart_data_three = chartdata(api_data.api_items, ["quarantined", "deceased", "infected"]);
    let last_updated = timeStamp(new Date(Date.parse(api_data.api_items.lastUpdatedAtSource)));

    return <div id="main">
        <h1>Covid situation in Hungary </h1>
        <div className="container-fluid">
            <div className="row">
                <RechartDiv chartoptions={chart_data_one} charttype="bar" updatetime={last_updated}/>
                <RechartDiv chartoptions={chart_data_two} charttype="area" updatetime={last_updated}/>
                <RechartDiv chartoptions={chart_data_three} charttype="line" updatetime={last_updated}/>
            </div>
        </div>
    </div>;
}

export default Maincontent;