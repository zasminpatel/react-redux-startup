//https://www.c-sharpcorner.com/article/multiple-layout-in-react-with-react-router-v4/
import React, { Component, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import LoginLayoutRoute from "./component/frontlayout/LoginLayout";
import BackLayoutRoute from "./component/backendlayout/BackLayout";
import AdminLayoutRoute from "./component/adminlayout/AdminLayout";
import FrontLayoutRoute from "component/frontlayout/FrontLayout";
// import DashboardPage from "./pages/adminpages/DashboardPage";
//import SettingPage from "./pages/adminpages/SettingPage";
//import AddressbooksPage from "./pages/adminpages/AddressbooksPage";
//import AddressbookPage from "./pages/adminpages/AddressbookPage";
//// import AddressbookPage from "./pages/adminpages/AddressbookPage";
//// import AddressbookPageNew from "./pages/adminpages/AddressbookPageNew";

import LoginPage from "./pages/LoginPage";
import CounterPage from "./pages/CounterPage";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import NoFounPage from "./pages/NoFounPage";
import LazyLoad from "./NProgress";
const DashboardPage = lazy(() => import("pages/adminpages/DashboardPage"));
const SettingPage = lazy(() => import("pages/adminpages/SettingPage"));
const AddressSearchPage = lazy(() =>
  import("./pages/adminpages/AddressbookSearchPage")
);
const AddressbooksPage = lazy(() =>
  import("./pages/adminpages/AddressbooksPage")
);
const AddressbookPage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("pages/adminpages/AddressbookPage")), 2000);
  });
});
const MMasterPage = lazy(() => import("pages/adminpages/MMasterPage"));
const MMastersPage = lazy(() => import("pages/adminpages/MMastersPage"));
// const Home = lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("./home")), 300);
//   });
// });
class Routers extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Suspense fallback={LazyLoad}> */}
          <Switch>
            {/* <Route exact path="/">
            <Redirect to="/about" />
          </Route> */}
            <Route exact path="/admin">
              <Redirect to="/admin/dashboard" />
            </Route>
            <AdminLayoutRoute
              path="/admin/dashboard"
              component={DashboardPage}
            />
            <AdminLayoutRoute path="/admin/setting" component={SettingPage} />
            <AdminLayoutRoute
              path="/admin/addresssearch"
              component={AddressSearchPage}
            />
            <AdminLayoutRoute
              path="/admin/addressbooks"
              component={AddressbooksPage}
            />
            <AdminLayoutRoute
              path="/admin/addressbook/:id?"
              component={AddressbookPage}
            />
            <AdminLayoutRoute path="/admin/mmasters" component={MMastersPage} />
            <AdminLayoutRoute
              path="/admin/mmaster/:id?"
              component={MMasterPage}
            />
            <BackLayoutRoute path="/back/dashboard" component={AboutUsPage} />
            <LoginLayoutRoute path="/login" component={LoginPage} />

            <FrontLayoutRoute exact path="/" component={HomePage} />
            <FrontLayoutRoute path="/about" component={AboutUsPage} />
            <FrontLayoutRoute path="/counter" component={CounterPage} />
            <Route path="/login1" component={LoginPage} />
            {/* <Route exact path="/" component={HomePage} /> 
            <Route path="/about" component={AboutUsPage} />
            <Route path="/counter" component={CounterPage} />*/}
            <Route path="/404" component={NoFounPage} />
            <Route path="*">
              <Redirect to="/404" />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
export default Routers;
