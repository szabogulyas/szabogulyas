type chartprops = {
    activeInfected: number,
    deceased: number,
    infected: number,
    quarantined: number,
    recovered: number,
    tested: number
};

function Chartdata(props: chartprops, elements: Array<string>) {

    let return_items = [];

    if (elements.includes("activeInfected")) {
        return_items.push({name: 'Active Infected', uv: props.activeInfected, pv: 2400, amt: 2400});
    }
    if (elements.includes("deceased")) {
        return_items.push({name: 'Deceased', uv: props.deceased, pv: 2400, amt: 2400});
    }
    if (elements.includes("infected")) {
        return_items.push({name: 'Infected', uv: props.infected, pv: 2400, amt: 2400});
    }
    if (elements.includes("quarantined")) {
        return_items.push({name: 'Quarantined', uv: props.quarantined, pv: 2400, amt: 2400});
    }
    if (elements.includes("recovered")) {
        return_items.push({name: 'Recovered', uv: props.recovered, pv: 2400, amt: 2400});
    }
    if (elements.includes("tested")) {
        return_items.push({name: 'Tested', uv: props.tested, pv: 2400, amt: 2400});
    }

    return return_items;
}

export default Chartdata