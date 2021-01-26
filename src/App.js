import "./assets/styles/App.css";
import Header from "@/pages/layout/header";
import Home from "./pages/home";
import Demo from "./pages/demo";
import cssDemo from "./pages/cssDemo";
import { Route, Router } from "react-router-dom";

function App() {
  let header = { title: "亮亮", fu0nc: ["watch"] };
  return (
    <div className="App">
      <Header {...header}></Header>
      {/* <Main></Main>
       */}
      <Route path="/home" component={Home}></Route>
      <Route path="/demo" component={Demo}></Route>
      <Route path="/cssDemo" component={cssDemo}></Route>
    </div>
  );
}

export default App;
