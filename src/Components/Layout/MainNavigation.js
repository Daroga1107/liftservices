import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Lift Services</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/foundations'>Foundations</Link>
          </li>
          <li>
            <Link to='/packaged-apps'>Packaged Apps</Link>
          </li>
          <li>
            <Link to='/vms-dbs'>VMs and DBs</Link>
          </li>
          <li>
            <Link to='/emerging-tech'>Emerging Technology</Link>
          </li>
          <li>
            <Link to='/analytics'>DW and Analytics</Link>
          </li>
          <li>
            <Link to='/exadata'>Exadata C@C</Link>
          </li>
          <li>
            <Link to='/others'>Others</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
