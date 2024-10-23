'use client'
import React from "react";
import { Input } from "@nextui-org/react";

interface DateSelectorProps {
    departureDate: string;
    setDepartureDate: React.Dispatch<React.SetStateAction<string>>;
    returnDate: string;
    setReturnDate: React.Dispatch<React.SetStateAction<string>>;
    selectedTrip: string;
}

export const DateSelector: React.FC<DateSelectorProps> = ({ departureDate, setDepartureDate, returnDate, setReturnDate, selectedTrip }) => {
    return (
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
    );
};

