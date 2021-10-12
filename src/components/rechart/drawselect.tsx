function Drawselect(props: any) {
    let onSelectChanged = (event: any) => {
        props.onChildSelectChanged(event.target.value)
    }
    return <select value={props.type} onChange={onSelectChanged}>
        <option value="line">Line</option>
        <option value="bar">Bar</option>
        <option value="area">Area</option>
    </select>
}

export default Drawselect;