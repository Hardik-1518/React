function Hello() {
    
    let myname = "Hardik";
    let number = 5;
    let fullname = () => {
        return "Hardik Srivastava";
    };

    return <h3> Message No: {number} Hello this is the future speaking! I am your master {fullname()}. {myname} is the best!</h3>;
    
}
export default Hello;
