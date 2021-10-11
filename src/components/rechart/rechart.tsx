import {
    LineChart,
    ResponsiveContainer,
    AreaChart,
    Area,
    Line,
    Legend,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from 'recharts';
import {useState} from "react";

const bootstrapclass = "col-xl-4 col-md-6 col-sm-12 col-12";

function RechartDiv(props: { chartoptions: any, charttype: string, updatetime : string }) {

    let typeofchart = (typeof props.charttype === 'undefined') ? 'line' : props.charttype;
    const [type, changeType] = useState(typeofchart);

    let top_html = <select value={type} onChange={changeChartType}>
        <option value="line">Line</option>
        <option value="bar">Bar</option>
        <option value="area">Area</option>
    </select>

    let date_html = <div className="updated-at"><b>Updated at:</b> {props.updatetime}</div>

    function changeChartType(event: { target: { value: string } }) {
        changeType(event.target.value)
    }

    if (type === 'bar') {
        return <div className={bootstrapclass}>
            {top_html}
            {date_html}
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={props.chartoptions}>
                    <XAxis dataKey="name" stroke="#8884d8"/>
                    <YAxis/>
                    <Tooltip/>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                    <Bar dataKey="uv" fill="#8884d8" barSize={30}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    } else if (type === 'area') {
        return <div className={bootstrapclass}>
            {top_html}
            {date_html}
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={props.chartoptions}
                                                        margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8"/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    } else {
        return <div className={bootstrapclass}>
            {top_html}
            {date_html}
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={props.chartoptions}
                                                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    }
}

export default RechartDiv