import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import JobsFetchData from './components/jobs-main';
import JobDetails from './components/jobs-details';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <h1 className="App__header">Job Offers</h1>
        <Route path="/esportlab-recruitment-task/" exact component={JobsFetchData}/>
        <Route path="/details/:id" component={JobDetails}/>
      </main>
    </BrowserRouter>
  );
}

export default App;
