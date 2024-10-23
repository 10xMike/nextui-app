'use client'
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

interface DestinationSelectorProps {
    selectedDeparture: string;
    setSelectedDeparture: React.Dispatch<React.SetStateAction<string>>;
    selectedArrival: string;
    setSelectedArrival: React.Dispatch<React.SetStateAction<string>>;
}

export const DestinationSelector: React.FC<DestinationSelectorProps> = ({ selectedDeparture, setSelectedDeparture, selectedArrival, setSelectedArrival }) => {
    return (
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
                        const key = Array.from(keys)[0];
                        if (typeof key === 'string') {
                            setSelectedDeparture(key);
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
                        const key = Array.from(keys)[0];
                        if (typeof key === 'string') {
                            setSelectedArrival(key);
                        }
                    }}
                >
                    <DropdownItem key="Palermo">Palermo</DropdownItem>
                    <DropdownItem key="Olbia">Olbia</DropdownItem>
                    <DropdownItem key="Cagliari">Cagliari</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};


