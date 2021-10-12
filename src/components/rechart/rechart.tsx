import chartdata from "../chartdata/chartdata";
import Createtimestamp from "./createtimestamp";
import Drawselect from "./drawselect";
import Drawlinechart from "./drawlinechart";
import Drawbarchart from "./drawbarchart";
import Drawareachart from "./drawareachart";
import Drawmultiselect from "./drawmultiselect";
import {useState} from "react";

function RechartDiv(props: { chartoptions: any, charttype: string/*, updatetime : string*/ }) {

    let chart_to_draw;
    const [chart_elements, setChartElements] = useState(["activeInfected", "deceased", "quarantined"]);
    let setNewChartData = (new_options : Array<string>) => {
        setChartElements(new_options);
    }

    let chart_data = chartdata(props.chartoptions.api_items, chart_elements);
    const [type, changeType] = useState((typeof props.charttype === 'undefined') ? 'line' : props.charttype);

    function changeChartType(change_type: string) {
        changeType(change_type)
    }

    if (type === 'bar') {
        chart_to_draw = <Drawbarchart chart_data={chart_data}/>
    } else if (type === 'area') {
        chart_to_draw = <Drawareachart chart_data={chart_data}/>
    } else {
        chart_to_draw = <Drawlinechart chart_data={chart_data}/>
    }
    return <div className="col-xl-4 col-md-6 col-sm-12 col-12">
        <Drawselect type={type} onChildSelectChanged={changeChartType}/>
        <div className="updated-at"><b>Updated at:</b> {Createtimestamp(props.chartoptions.api_items.lastUpdatedAtSource)}</div>
        {chart_to_draw}
        <div className="multi-select-container"><Drawmultiselect onOptionsSelected={setNewChartData}/></div>
    </div>
}

export default RechartDiv