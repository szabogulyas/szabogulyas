import {Multiselect} from "multiselect-react-dropdown";

let selectoptions = [
    {name: 'Active Infected', id: 'activeInfected'},
    {name: 'Deceased', id: 'deceased'},
    {name: 'Infected', id: 'infected'},
    {name: 'Quarantined', id: 'quarantined'},
    {name: 'Recovered', id: 'recovered'},
    {name: 'Tested', id: 'tested'}
];

function Drawmultiselect(props: any) {

    let createSelectedOptions = (list : any) => {
        let selectedoptions = [];
        for (let le in list) {
            selectedoptions.push(list[le].id);
        }
        return selectedoptions;
    }

    let onOptionSelected = (selectedList: any, selectedItem: any) => {
        let selectedoptions = createSelectedOptions(selectedList);
        props.onOptionsSelected(selectedoptions);
    }

    let onOptionRemoved = (selectedList: any, selectedItem: any) => {
        let selectedoptions = createSelectedOptions(selectedList);
        props.onOptionsSelected(selectedoptions);
    }

    return <Multiselect options={selectoptions} onSelect={onOptionSelected} onRemove={onOptionRemoved}
                        selectedValues={[
                            {name: 'Active Infected', id: 'activeInfected'},
                            {name: 'Deceased', id: 'deceased'},
                            {name: 'Quarantined', id: 'quarantined'}
                        ]}
                        displayValue="name" showCheckbox={true} closeIcon="cancel"/>
}

export default Drawmultiselect;