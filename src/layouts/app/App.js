import React from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import LandingPage from "../../components/Landing";
import SignUpPage from "../../components/SignUp";
import SignInPage from "../../components/SignIn";
import PasswordForgetPage from "../../components/PaswordForget";
import AccountPage from "../../components/Account";
import AdminPage from "../../components/Admin";
import * as ROUTES from "../../constants/routes";
import { withAuthentication } from '../../components/Session';



const App = () => (
                <Router>
                    <div>
                        <hr/>
                        <HomePage/>
                        <Route exact path={ROUTES.LANDING} component={LandingPage}/>
                        <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
                        <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
                        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
                        <Route path={ROUTES.HOME} component={HomePage}/>
                        <Route path={ROUTES.ACCOUNT} component={AccountPage}/>
                        <Route path={ROUTES.ADMIN} component={AdminPage}/>
                    </div>
                </Router>
        );

export default withAuthentication(App);
