import React from "react";

import { NavbarInterface } from './interfaces';

import { NavbarComponent} from './styles';

function Navbar(props: NavbarInterface) {
    return <NavbarComponent {...props} />


}

export default Navbar;
