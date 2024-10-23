'use client'
import React from "react";
import { Input } from "@nextui-org/react";

interface PassengerCountInputProps {
    passengerCount: number;
    setPassengerCount: React.Dispatch<React.SetStateAction<number>>;
}

export const PassengerCountInput: React.FC<PassengerCountInputProps> = ({
    passengerCount,
    setPassengerCount,
}) => {
    return (
        <div className="flex gap-3">
            <Input
                label="Numero di passeggeri"
                type="number"
                min={1}
                value={passengerCount.toString()}
                onChange={(e) => setPassengerCount(parseInt(e.target.value) || 1)}
            />
        </div>
    );
};
