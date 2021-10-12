import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

function Drawlinechart(props: {chart_data : any}) {
    return <ResponsiveContainer width="100%" height={300}>
        <LineChart
            data={props.chart_data}
            margin={
                {
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }
            }>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
        </LineChart>
    </ResponsiveContainer>
}

export default Drawlinechart;