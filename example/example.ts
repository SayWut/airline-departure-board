import DepartureBoards from "../src/data/DepartureBoards"

const supportedAirports = DepartureBoards.supportedAirports();
console.log(supportedAirports);

// exampling the power of types which indicates the string isn't part of the SupportedAirports type
// this will not run if you want to run it you can remove it or add ts-ignore
DepartureBoards.departuresFor("test")
    .catch((err) => console.error(err));

// using ts-ignore to trigger the error of not supported airport
//@ts-ignore
DepartureBoards.departuresFor("test")
    .catch((err) => console.error(err));

DepartureBoards.departuresFor("LLGB")
    .then((departures) => console.log(JSON.stringify(departures)))
    .catch((err) => console.error(err));