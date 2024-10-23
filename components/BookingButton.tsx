'use client'
import React, { useState } from "react";
import { Button } from "@nextui-org/react";

interface BookingButtonProps {
    data: {
        tripType: string;
        departure: string;
        arrival: string;
        departureDate: string;
        returnDate: string;
        passengerCount: number;
        vehicle: string;
    };
}

export const BookingButton: React.FC<BookingButtonProps> = ({ data }) => {
    const [responseMessage, setResponseMessage] = useState("");
    const [bookingDetails, setBookingDetails] = useState<{
        message: string;
        tripType: string;
        departure: string;
        arrival: string;
        departureDate: string;
        returnDate: string;
        passengerCount: number;
        vehicle: string;
    } | null>(null);

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/content', {
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

            const { message, data: bookingData } = result;
            setBookingDetails({
                message,
                ...bookingData,
            });

        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('Si è verificato un errore durante la prenotazione.');
        }
    };

    return (
        <div>
            <Button onClick={handleSubmit} color="primary">
                Prenota
            </Button>
            <div className="mt-4">
                {bookingDetails && (
                    <div className="text-default-500 text-small">
                        <p>{bookingDetails.message}</p>
                        <p><strong>Tipo di viaggio:</strong> {bookingDetails.tripType}</p>
                        <p><strong>Partenza:</strong> {bookingDetails.departure}</p>
                        <p><strong>Arrivo:</strong> {bookingDetails.arrival}</p>
                        <p><strong>Data di partenza:</strong> {bookingDetails.departureDate}</p>
                        {bookingDetails.returnDate && (
                            <p><strong>Data di ritorno:</strong> {bookingDetails.returnDate}</p>
                        )}
                        <p><strong>Numero di passeggeri:</strong> {bookingDetails.passengerCount}</p>
                        <p><strong>Veicolo:</strong> {bookingDetails.vehicle}</p>
                    </div>
                )}
                {responseMessage && (
                    <p className="text-default-500 text-small">
                        {responseMessage}
                    </p>
                )}
            </div>
        </div>
    );
};
