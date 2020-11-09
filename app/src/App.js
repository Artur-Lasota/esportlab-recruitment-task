import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import JobsFetchData from './components/JobsMain/JobsFetchData';
import JobDetails from './components/JobsDetails/JobsDetails';

function App() {
  return (
    <BrowserRouter>
      <main>
        <h1>Job Offers</h1>
        <Route path="/" exact component={JobsFetchData}/>
        <Route path="/details/:id" component={JobDetails}/>
      </main>
    </BrowserRouter>
  );
}

export default App;
