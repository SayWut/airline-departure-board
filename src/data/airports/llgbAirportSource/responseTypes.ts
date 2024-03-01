export interface FlightBoardSurface {
    Flights: Flight[]
    LastUpdate: string
    HiddenCols: any[]
}

export interface Flight {
    CheckInUrl: string
    Counter: string
    Airline: string
    Flight: string
    Terminal: string
    Status: string
    City: string
    Country: any
    StatusColor: string
    ScheduledDateTime: string
    ScheduledDate: string
    ScheduledTime: string
    UpdatedDateTime: string
    UpdatedDate: string
    UpdatedTime: string
    CurrentCultureName: string
}
