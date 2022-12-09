import Nav from "./components/Nav/Nav";
import React from "react";
import { Routes, Route } from "react-router-dom";
import TeamDetail from "./components/TeamDetail/TeamDetail";
import CreateTeam from "./components/CreateTeam/CreateTeam";
import Teams from "./components/Teams/Teams";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Teams />}></Route>
        <Route exact path="/teams/:teamid" element={<TeamDetail />}></Route>
        <Route path="/team/create" element={<CreateTeam />}></Route>
      </Routes>
    </div>
  );
}

export default App;
