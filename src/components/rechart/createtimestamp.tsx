function Createtimestamp(given_date : string) {
    let now = new Date(Date.parse(given_date));
    let date = [now.getFullYear(), now.getMonth() + 1, now.getDate()].map(d => d.toString().length === 1 ? "0" + d : d);
    let time = [now.getHours(), now.getMinutes()].map(d => d.toString().length === 1 ? "0" + d : d);
    return date.join(".") + " " + time.join(":");
}
export default Createtimestamp;