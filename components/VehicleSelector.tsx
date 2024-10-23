'use client'
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

interface VehicleSelectorProps {
    selectedVehicle: string;
    setSelectedVehicle: React.Dispatch<React.SetStateAction<string>>;
}

export const VehicleSelector: React.FC<VehicleSelectorProps> = ({ selectedVehicle, setSelectedVehicle }) => {
    return (
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
                    const key = Array.from(keys)[0];
                    if (typeof key === 'string') {
                        setSelectedVehicle(key);
                    }
                }}
            >
                <DropdownItem key="Nessun veicolo">Nessun veicolo</DropdownItem>
                <DropdownItem key="Auto">Auto</DropdownItem>
                <DropdownItem key="Moto">Moto</DropdownItem>
                <DropdownItem key="Camper">Camper</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};
