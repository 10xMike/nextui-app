'use client'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react"

export const TranslationDropdown = () => {
    return (
        <Dropdown>
            <DropdownTrigger>
                <button className="flex items-center hover:text-gray-300">
                    IT
                    <svg
                        className="ml-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Language selection" color="primary">
                <DropdownItem key="it">Italiano</DropdownItem>
                <DropdownItem key="en">English</DropdownItem>
                <DropdownItem key="es">Español</DropdownItem>
                <DropdownItem key="fr">Français</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}