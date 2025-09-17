function Random() {
    let number = Math.floor(Math.random() * 100);
    return <h1 style={{ backgroundColor: "purple" }}>Random Number is: {number}</h1>;
}
export default Random;