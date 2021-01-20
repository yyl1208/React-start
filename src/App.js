import "./assets/styles/App.css";
import Header from "@/pages/layout/header";
// import Main from "./pages/layout/main";
import { Route } from "react-router-dom";

function App() {
  let header = { title: "亮亮", fu0nc: ["watch"] };
  return (
    <div className="App">
      <Header {...header}></Header>
      {/* <Main></Main>
       */}
      <Route path="/home" component="Home"></Route>
      <Route path="/demo" component="Demo"></Route>
    </div>
  );
}

export default App;
