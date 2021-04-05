import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <ul>
          <Link style={{ padding: "1rem" }} to="/login">
            Login
          </Link>
          <Link style={{ padding: "1rem" }} to="/signup">
            Signup
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Header;
