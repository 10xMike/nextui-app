'use client'
import { useState } from "react";
import { TripTypeSelector } from "./TripTypeSelector";
import { DestinationSelector } from "./DestinationSelector";
import { DateSelector } from "./DateSelector";
import { PassengerCountInput } from "./PassengerCountInput";
import { VehicleSelector } from "./VehicleSelector";
import { BookingButton } from "./BookingButton";

export default function BookingForm() {
    const [selectedTrip, setSelectedTrip] = useState<string>("Andata e ritorno");
    const [selectedDeparture, setSelectedDeparture] = useState("Napoli");
    const [selectedArrival, setSelectedArrival] = useState("Palermo");
    const [departureDate, setDepartureDate] = useState<string>("");
    const [returnDate, setReturnDate] = useState<string>("");
    const [passengerCount, setPassengerCount] = useState<number>(1);
    const [selectedVehicle, setSelectedVehicle] = useState<string>("Nessun veicolo");
    const [responseMessage, setResponseMessage] = useState<string>("");

    const formData = {
        tripType: selectedTrip,
        departure: selectedDeparture,
        arrival: selectedArrival,
        departureDate,
        returnDate,
        passengerCount,
        vehicle: selectedVehicle,
    };

    return (
        <div className="my-[6rem] flex flex-col gap-4">
            <TripTypeSelector selectedTrip={selectedTrip} setSelectedTrip={setSelectedTrip} />
            <DestinationSelector
                selectedDeparture={selectedDeparture}
                setSelectedDeparture={setSelectedDeparture}
                selectedArrival={selectedArrival}
                setSelectedArrival={setSelectedArrival}
            />
            <DateSelector
                departureDate={departureDate}
                setDepartureDate={setDepartureDate}
                returnDate={returnDate}
                setReturnDate={setReturnDate}
                selectedTrip={selectedTrip}
            />
            <PassengerCountInput passengerCount={passengerCount} setPassengerCount={setPassengerCount} />
            <VehicleSelector selectedVehicle={selectedVehicle} setSelectedVehicle={setSelectedVehicle} />

            <BookingButton data={formData} />

        </div>
    )
}
