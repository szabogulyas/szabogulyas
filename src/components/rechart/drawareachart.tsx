import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

function Drawareachart(props: {chart_data : any}) {
    return <ResponsiveContainer width="100%" height={300}>
        <AreaChart
            data={props.chart_data}
            margin={
                {
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }
            }>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8"/>
        </AreaChart>
    </ResponsiveContainer>
}

export default Drawareachart;