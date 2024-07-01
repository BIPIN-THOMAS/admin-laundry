import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Users from "./components/Users";
import Orders from "./components/Orders";
import Settings from "./components/Settings";
import Usertable from "./components/Usertable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/users" Component={Users} />
        <Route exact path="/orders" Component={Orders} />
        <Route exact path="/Settings" Component={Settings} />
        <Route exact path="/Usertable" Component={Usertable} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
