'use client'
import React, { useState } from "react";
import { RadioGroup, Radio, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Input } from "@nextui-org/react";

export default function App() {
    const [selectedTrip, setSelectedTrip] = useState("Andata e ritorno");
    const [selectedDeparture, setSelectedDeparture] = useState("Napoli");
    const [selectedArrival, setSelectedArrival] = useState("Palermo");
    const [departureDate, setDepartureDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [passengerCount, setPassengerCount] = useState<number>(1);
    const [selectedVehicle, setSelectedVehicle] = useState("Nessun veicolo");
    const [responseMessage, setResponseMessage] = useState(""); // Stato per memorizzare la risposta

    const handleSubmit = async () => {
        const data = {
            tripType: selectedTrip,
            departure: selectedDeparture,
            arrival: selectedArrival,
            departureDate,
            returnDate,
            passengerCount,
            vehicle: selectedVehicle,
        };

        try {
            const response = await fetch('YOUR_API_ENDPOINT_HERE', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            setResponseMessage(JSON.stringify(result)); // Memorizza la risposta del server
        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('Si è verificato un errore durante la prenotazione.'); // Messaggio di errore
        }
    };

    return (
        <div className="flex flex-col gap-3 p-4">
            {/* Tipo di viaggio */}
            <RadioGroup
                label="Seleziona il tipo di viaggio"
                value={selectedTrip}
                onValueChange={setSelectedTrip}
            >
                <div className="flex flex-row gap-3">
                    <Radio value="Andata e ritorno">Andata e ritorno</Radio>
                    <Radio value="Solo andata">Solo andata</Radio>
                    <Radio value="Ritorno differente">Ritorno differente</Radio>
                </div>
            </RadioGroup>

            {/* Selezione destinazioni */}
            <div className="flex gap-3">
                <Dropdown>
                    <DropdownTrigger>
                        <Button variant="bordered" className="capitalize">
                            {selectedDeparture}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Seleziona la partenza"
                        disallowEmptySelection
                        selectionMode="single"
                        onSelectionChange={(keys) => {
                            const key = Array.from(keys)[0]; // Prendi il primo elemento
                            if (typeof key === 'string') {
                                setSelectedDeparture(key); // Assicurati che sia una stringa
                            }
                        }}
                    >
                        <DropdownItem key="Napoli">Napoli</DropdownItem>
                        <DropdownItem key="Civitavecchia">Civitavecchia</DropdownItem>
                        <DropdownItem key="Genova">Genova</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <Dropdown>
                    <DropdownTrigger>
                        <Button variant="bordered" className="capitalize">
                            {selectedArrival}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Seleziona l'arrivo"
                        disallowEmptySelection
                        selectionMode="single"
                        onSelectionChange={(keys) => {
                            const key = Array.from(keys)[0]; // Prendi il primo elemento
                            if (typeof key === 'string') {
                                setSelectedDeparture(key); // Assicurati che sia una stringa
                            }
                        }}
                    >
                        <DropdownItem key="Palermo">Palermo</DropdownItem>
                        <DropdownItem key="Olbia">Olbia</DropdownItem>
                        <DropdownItem key="Cagliari">Cagliari</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>

            {/* Selezione date */}
            <div className="flex gap-3">
                <Input
                    label="Data di partenza"
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                />
                {selectedTrip === "Andata e ritorno" && (
                    <Input
                        label="Data di ritorno"
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                    />
                )}
            </div>

            {/* Numero passeggeri */}
            {/* <div className="flex gap-3">
                <Input
                    label="Numero di passeggeri"
                    type="number"
                    min={1}
                    value={passengerCount}
                    onChange={(e) => setPassengerCount(parseInt(e.target.value))}
                />
            </div> */}

            {/* Selezione veicolo */}
            <Dropdown>
                <DropdownTrigger>
                    <Button variant="bordered" className="capitalize">
                        {selectedVehicle}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Seleziona il veicolo"
                    disallowEmptySelection
                    selectionMode="single"
                    onSelectionChange={(keys) => {
                        const key = Array.from(keys)[0]; // Prendi il primo elemento
                        if (typeof key === 'string') {
                            setSelectedDeparture(key); // Assicurati che sia una stringa
                        }
                    }}
                >
                    <DropdownItem key="Nessun veicolo">Nessun veicolo</DropdownItem>
                    <DropdownItem key="Auto">Auto</DropdownItem>
                    <DropdownItem key="Moto">Moto</DropdownItem>
                    <DropdownItem key="Camper">Camper</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            {/* Pulsante per confermare la prenotazione */}
            <Button onClick={handleSubmit} color="primary">
                Prenota
            </Button>

            {/* Mostra la risposta del server */}
            <div className="mt-4">
                {responseMessage && (
                    <p className="text-default-500 text-small">
                        Risposta dal server: {responseMessage}
                    </p>
                )}
            </div>
        </div>
    );
}
