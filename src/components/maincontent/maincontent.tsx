import RechartDiv from "../rechart/rechart";

function Maincontent(api_data: any) {
    return <div id="main">
        <h1>Covid situation in Hungary </h1>
        <div className="container-fluid">
            <div className="row">
                <RechartDiv chartoptions={api_data} charttype="bar"/>
                <RechartDiv chartoptions={api_data} charttype="area"/>
                <RechartDiv chartoptions={api_data} charttype="line"/>
            </div>
        </div>
    </div>;
}

export default Maincontent;