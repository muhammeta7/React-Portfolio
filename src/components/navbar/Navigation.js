import React, { useState } from "react";
import { Link } from "@reach/router";
import "./navigation.scss";

function Navigation({
  background,
  hoverBackground,
  linkColor,
  navLinks,
  logo,
}) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="responsive-toolbar" style={{ background }}>
      <ul style={{ background }} className={navOpen ? "active" : ""}>
        <figure onClick={() => setNavOpen(!navOpen)}>
          <img src={logo} height="40px" alt="logo-nav-toggler" />
        </figure>
        {navLinks.map((link, index) => (
          <li
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
            style={{
              background:
                hoverIndex === index
                  ? hoverBackground || "#999 !important"
                  : "",
            }}
          >
            <Link to={link.path} style={{ color: linkColor }}>
              {link.text}
              <i className={link.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
