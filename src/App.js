import Chart from "./components/Chart";
// import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Discription from "./components/DiscriptionSection";
import "../src/css/style.css";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}

      <Navbar />
      <Discription />
      <Chart />
    </div>
  );
}

export default App;
