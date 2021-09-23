import { Route, Switch } from "react-router-dom";

import MainNavigation from "./Components/Layout/MainNavigation";
import HomePage from "./Pages/Home";
import FoundationsPage from "./Pages/Foundations/Foundations";
import PackagedAppsPage from "./Pages/PackagedApps";
import VMsDBsPage from "./Pages/VMsDBs/VMsDBs";
import EmergingTechPage from "./Pages/EmergingTech";
import AnalyticsPage from "./Pages/Analytics";
import ExadataPage from "./Pages/Exadata";
import OthersPage from "./Pages/Others";

function App() {
  // localhost:3000/favorites
  // my-page.com/
  return (
    <div>
      <MainNavigation />
      <Switch>
      <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/foundations">
          <FoundationsPage />
        </Route>
        <Route path="/packaged-apps">
          <PackagedAppsPage />
        </Route>
        <Route path="/vms-dbs">
          <VMsDBsPage />
        </Route>
        <Route path="/emerging-tech">
          <EmergingTechPage />
        </Route>
        <Route path="/analytics">
          <AnalyticsPage />
        </Route>
        <Route path="/exadata">
          <ExadataPage />
        </Route>
        <Route path="/others">
          <OthersPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;