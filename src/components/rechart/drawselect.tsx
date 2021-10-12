import {Multiselect} from "multiselect-react-dropdown";

let selectoptions = [{name: 'Line', id: 'line'}, {name: 'Bar', id: 'bar'}, {name: 'Area', id: 'area'}];

function Drawselect(props: any) {
    let onSelectChanged = (selectedList: any, selectedItem: any) => {
        props.onChildSelectChanged(selectedItem.id)
    }

    let selected_result = selectoptions.filter(obj => {
        return obj.id === props.type
    })

    return <Multiselect options={selectoptions} onSelect={onSelectChanged} singleSelect={true} displayValue="name"
                        selectedValues={selected_result}/>
}

export default Drawselect;