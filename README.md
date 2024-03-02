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

## Using the Library Locally with npm link

This section explains how to use this developed library in another project within your machine.

**Steps:**

1.  **Clone this Project:**

    Ensure you have Git installed. Then, clone this repository using a command like:

    ```bash
    git clone https://github.com/SayWut/airline-departure-board.git
    ```

2.  **Build the Library:**

    This library requires building before use (e.g., compilation), run the following command in the project's root directory:

    ```bash
    npm run build
    ```

3.  **Linking the Library:**

    In this library project directory:

    Run the following command in your terminal to create a global symlink:

        ```bash
        npm link
        ```

    This makes the library accessible to other projects on your local machine.

4.  **Using the Library in Another Project:**

    1. Navigate to the root directory of your project using your terminal.
    2. Run the following command:

       ```bash
       npm link airline-departure-board
       ```

       This creates a symbolic link from the global installation of this library to your project's `node_modules` folder.

5.  **Using the Library in your project:**

    Now, in your project's code, you can import the library like so:

    - Typescript:

      ```typescript
      import DepartureBoards from "airline-departure-board";
      ```

    - Javascript:

      ```typescript
      const { DepartureBoards } = require("airline-departure-board");
      ```
