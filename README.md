## Multi-Airline Departure Board Library

**Introduction:**

Airlines provide departure board information as a table with specific columns, but the format varies across airlines. This library aims to offer a unified interface for retrieving this data from various sources.

**API Definition:**

The library exposes an interface `DepartureBoards` with methods for retrieving information:

- `supportedAirports()`: Returns a list of supported airport codes.
- `departuresFor(airport: string)`: Takes an airport code (string) and returns a Promise resolving to a list of `Departure` objects. This method throws an error if the airport is not supported.

**Data Model:**

- `Departure`: Defines the data model for individual departures, including:
  - `airline`: Airline name (string).
  - `destinationCity`: Destination city (string).
  - `flightCode`: Flight code (string).
  - `scheduleDate`: Scheduled date (string, DD/MM format).
  - `scheduleTime`: Scheduled time (string, HH:MM format).
  - `updateDate`: Last update date (string, DD/MM format).
  - `updateTime`: Last update time (string, HH:MM format).

**Initial Implementation:**

The initial version focuses on Ben Gurion Airport (LLBG) and utilizes the provided API endpoint:

- Data fetching for LLBG is done via a POST request to `https://www.iaa.gov.il/umbraco/surface/FlightBoardSurface/Search` with specific form data.
- This implementation is designed to be extensible for incorporating additional airports in the future without tight coupling.
