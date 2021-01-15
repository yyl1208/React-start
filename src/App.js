import "./assets/styles/App.css";
import Header from "./views/layout/header";
import Main from "./views/layout/main";
import BoxLoad from "./views/components/loadingDemo";


function App() {
  let header = { title: "亮亮", fu0nc: ["watch"] };
  return (
    <div className="App">
      <Header {...header}></Header>
      <Main></Main>
      <BoxLoad></BoxLoad>
    </div>
  );
}

export default App;
