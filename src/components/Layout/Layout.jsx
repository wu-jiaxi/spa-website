import { Outlet, Link } from "react-router-dom";
import "../Layout/Layout.css";

const Layout = () => {
  return (
    <>
      <div id="NycSpa">
        <Link to="/" className="link">
          <h1>NYC Spa</h1>
        </Link>
      </div>
      <nav id="tabs">
        <ul id="tabsUL">
          <li className="test">
            <Link to="/form" className="link">
              Form
            </Link>
          </li>
          <li className="test">
            <Link to="/admin" className="link">
              Admin
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
