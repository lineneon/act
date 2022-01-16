import React from "react";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (<header className="bg-gray-600 h-[60px] w-full flex justify-center items-center">
        <FontAwesomeIcon icon={faCoffee} color="white" size="2x" className="hover:opacity-70 active:opacity-80"/>
    </header>)
}

export default Header;