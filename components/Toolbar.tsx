import { Navbar } from "@nextui-org/navbar"
import { TranslationDropdown } from "./TranslationDropdown"
import { Link } from "@nextui-org/link"

export const Toolbar = () => {
    const links = [
        "BLOG",
        "MYGNV",
        "CALENDARIO PREZZI",
        "GRUPPI",
        "MICE",
        "CARGO",
        "RICHIEDI FATTURA",
        "AREA AGENZIE"
    ];

    return (
        <Navbar className="bg-blue-700 text-white py-2">
            <div className=" mx-auto flex justify-between items-center px-4">
                {/* Left Side - Button */}
                <Link className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 mr-4 w-[252px] rounded flex justify-center">
                    LA MIA PRENOTAZIONE
                </Link>

                {/* Right Side - Links */}
                <div className="flex space-x-6 text-white gap-4">
                    {links.map((link, index) => (
                        <Link key={index} className="hover:text-gray-300 text-white" href="#">
                            {link}
                        </Link>
                    ))}

                    {/* Language Dropdown */}

                    <TranslationDropdown></TranslationDropdown>
                </div>

            </div>
        </Navbar>
    )
}