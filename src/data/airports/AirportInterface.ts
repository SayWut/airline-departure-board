import Departure from "../../entities/Departure.js";

/**
 * This is the basic interface which all the airport source must implement
 */
export default interface AirportInterface {
    /**
     * retrieves information about all departing flights from the airport
     */
    getDepartures(): Promise<Departure[]>
}