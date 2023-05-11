import React from "react";

import { NavbarIntefance } from './interfaces';

import { NavbarComponent} from './styles';

function Navbar(props: NavbarIntefance) {
    return <NavbarComponent {...props} />


}

export default Navbar;
