import Departure from "../../../../entities/Departure.js";
import { Flight } from "../responseTypes.js";

/**
 * defining a model of LLGB flight departure
 */
class LLGBDepartureModel implements Departure {
    constructor(
        public airline: string,
        public destinationCity: string,
        public flightCode: string,
        public scheduleDate: string,
        public scheduleTime: string,
        public updateDate: string,
        public updateTime: string,
    ) { }

    /**
     * Creates a LLGBDepartureModel from the api response
     * 
     * @param flight the flight data from the LLGB api response
     */
    static fromJSON(flight: Flight) {
        return new LLGBDepartureModel(
            flight.Airline,
            flight.City,
            flight.Flight,
            flight.ScheduledDate,
            flight.ScheduledTime,
            flight.UpdatedDate,
            flight.UpdatedTime,
        )
    }
}

export default LLGBDepartureModel;