function Chartdata(props : {activeInfected : number, deceased : number, infected : number, quarantined : number, recovered : number, tested : number}) {
    return [
        {name: 'Active Infected', uv: props.activeInfected, pv: 2400, amt: 2400},
        {name: 'Deceased', uv: props.deceased, pv: 2400, amt: 2400},
        /*{name: 'Infected', uv: props.infected, pv: 2400, amt: 2400},*/
        {name: 'Quarantined', uv: props.quarantined, pv: 2400, amt: 2400},
        /*{name: 'Recovered', uv: props.recovered, pv: 2400, amt: 2400},*/
        /*{name: 'Tested', uv: props.tested, pv: 2400, amt: 2400},*/
    ];
}
export default Chartdata