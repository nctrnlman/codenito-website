import logo from "./logo.svg";
import "./App.css";
import Banner from "./component/Banner";
import About from "./component/About";

function App() {
  return (
    <div className="bg-white">
      <Banner />
      <About />
    </div>
  );
}

export default App;
