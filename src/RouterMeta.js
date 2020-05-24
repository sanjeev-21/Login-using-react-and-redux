import React, { Component } from 'react';
import {BrowserRouter,Switch, Route} from "react-router-dom";
import LoginPage from './Components/Login'
import Dashboard from './Components/Dashboard'
import { ProtectedRoute } from "./Common/ProtectedRoute";
const RouterMeta = (props) => 
<BrowserRouter>
<Switch>
    <ProtectedRoute path="/dashboard" component={Dashboard}/>
    <Route path="/" component={LoginPage}/>      
</Switch>
</BrowserRouter>

export default RouterMeta