import "./assets/styles/App.css";
import Header from "./views/layout/header";
import Main from "./views/layout/main";

function App() {
  let header = { title: "亮亮", func: ["watch"] };
  return (
    <div className="App">
      <Header {...header}></Header>
      <Main></Main>
    </div>
  );
}

export default App;
