import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/main";
import Footer from "../components/Footer";

const Routes = () => (
    <BrowserRouter>
        <Fragment>
            <Switch>
                <Route path="/" component={Main} />
            </Switch>
        </Fragment>
        <Footer />
    </BrowserRouter>
);

export default Routes;
