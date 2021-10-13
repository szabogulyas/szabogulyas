import RechartDiv from "../rechart/rechart";
import Heading from "./heading";

function Maincontent(api_data: any) {
    return <div id="main">
        <Heading headingtext="Covid situation in Hungary"/>
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