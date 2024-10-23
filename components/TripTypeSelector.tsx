'use client'
import React from "react";
import { RadioGroup, Radio } from "@nextui-org/react";

interface TripTypeSelectorProps {
    selectedTrip: string;
    setSelectedTrip: React.Dispatch<React.SetStateAction<string>>;
}

export const TripTypeSelector: React.FC<TripTypeSelectorProps> = ({ selectedTrip, setSelectedTrip }) => {
    return (
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
    );
};


