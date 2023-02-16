import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
      <NavLink to="/feed"><img class="ui fluid image" src="./images/BurnBookBanner.svg" alt="placeholder" />
      </NavLink>

    );
  }

export default Header;