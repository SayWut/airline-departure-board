import axios from "axios";
import { FlightBoardSurface } from "./responseTypes";
import LLGBDepartureModel from "./models/LLGBDepartureModel";
import AirportInterface from "../AirportInterface";

/**
 * This class is responsible to retrieve data from the Ben Gurion airport of Israel
 */
class LLBGAirportSource implements AirportInterface {
    async getDepartures() {
        const endpoint = "https://www.iaa.gov.il/umbraco/surface/FlightBoardSurface/Search";
        const body = {
            "FlightType": "Outgoing",
            "AirportId": "LLBG",
            "UICulture": "en-US"
        }

        const response = await axios.post(endpoint, body);
        const responseData: FlightBoardSurface = response.data;
        const departures = responseData.Flights.map((flight) => LLGBDepartureModel.fromJSON(flight));

        return departures;
    }
}

export default LLBGAirportSource;