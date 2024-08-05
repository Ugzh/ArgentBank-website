import { NavLink } from "react-router-dom";
import Logo from "/src/assets/img/argentBankLogo.png";

export default function Header() {
  return (
    <header>
      <nav className={"main-nav"}>
        <NavLink to={"/"} className={"main-nav-logo"}>
          <img
            src={Logo}
            alt={"Argent Bank logo"}
            className={"main-nav-logo-image"}
          ></img>
          <h1 className={"sr-only"}>Argent bank </h1>
        </NavLink>
        <div>
          <NavLink to={"/sign-in"} className={"main-nav-item"}>
            <i className="fa fa-user-circle"></i> Sign In{" "}
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
