import React from "react";
import './App.css';
import { Switch,Route } from "react-router-dom";
import LandingPage from "./components/Landingpage/LandingPage";
import PostView from "./components/PostView/PostView";
import Error from './components/errorPage/error';
import PostForm from "./components/PostView/PostForm";
import './App.css';

function App() {
  return (
    <Switch>
    <Route path='/' exact>
        <LandingPage></LandingPage>
    </Route>
    <Route path='/postview' exact>
      <PostView></PostView>
    </Route>
    <Route path='/addpost' exact>
      <PostForm></PostForm>
    </Route>
    <Route path='*'>
        <Error></Error>
    </Route>
  </Switch>
  );
}

export default App;
