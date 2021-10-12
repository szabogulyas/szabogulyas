import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

function Drawbarchart(props: {chart_data : any}) {
    return <ResponsiveContainer width="100%" height={300}>
        <BarChart data={props.chart_data}>
            <XAxis dataKey="name" stroke="#8884d8"/>
            <YAxis/>
            <Tooltip/>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
            <Bar dataKey="uv" fill="#8884d8" barSize={30}/>
        </BarChart>
    </ResponsiveContainer>
}
export default Drawbarchart;