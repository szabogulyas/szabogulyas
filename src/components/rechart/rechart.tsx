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

function RechartDiv(props: { chartoptions: [{ name: string, uv: number, pw: number, amt: number }], charttype: string }) {

    let typeofchart = (typeof props.charttype === 'undefined') ? 'line' : props.charttype;
    const [type, changeType] = useState(typeofchart);

    let selecthtml = <select value={type} onChange={changeChartType}>
        <option value="line">Line</option>
        <option value="bar">Bar</option>
        <option value="area">Area</option>
    </select>

    function changeChartType(event: { target: { value: string } }) {
        changeType(event.target.value)
    }

    const bootstrapclass = "col-xl-4 col-md-6 col-sm-12 col-12";

    if (type === 'bar') {
        return <div className={bootstrapclass}>
            {selecthtml}
            <ResponsiveContainer width="100%" height={300}>
                <BarChart /*width={600} height={400}*/ data={props.chartoptions}>
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
            {selecthtml}
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart /*width={600} height={400}*/ data={props.chartoptions}
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
            {selecthtml}
            <ResponsiveContainer width="100%" height={300}>
                <LineChart /*width={600} height={400}*/ data={props.chartoptions}
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