import AirportInterface from "./airports/AirportInterface";
import LLBGAirportSource from "./airports/llgbAirportSource/LLBGAirportSource";

module DepartureBoards {
    /**
     * We are achieving three things 
     * Type safety: 
     * The code leverages type annotations to enforce type consistency, making the code 
     * less prone to errors and easier to understand.
     * 
     * Maintainability: 
     * Adding new supported airports requires only updating the supportedAirportsCode array. 
     * The SupportedAirports type and sourceMap automatically adapt to the changes, improving code
     * maintainability.
     * 
     * Error prevention: 
     * The type definitions help prevent potential errors at compile time, 
     * such as assigning a non-matching type to the airportSources object or using an unsupported airport code.
     */
    const supportedAirportsCode = ["LLGB"] as const;
    type SupportedAirports = typeof supportedAirportsCode[number];

    type sourcesMap = { [source in SupportedAirports]: AirportInterface };
    const airportSources: sourcesMap = {
        "LLGB": new LLBGAirportSource()
    }

    /**
    * Returns a list of supported airport codes
    */
    export function supportedAirports(): string[] {
        return [...supportedAirportsCode];
    }

    /**
    * Returns a list of departures for the given airport
    * @param airport the airport code
    * @returns a list of departures
    * @throws an error if the airport is not supported
    */
    export async function departuresFor(airport: SupportedAirports) {
        // checks if the source is supported if not throws an error
        if (airportSources.hasOwnProperty(airport))
            return airportSources[airport].getDepartures();

        throw new Error(`Airport ${airport} isn't supported`);
    }
}

export default DepartureBoards;