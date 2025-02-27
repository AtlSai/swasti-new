import "./App.css";
import Navbar1 from "./Components/Navbar1/Navbar1";
import Navbar2 from "./Components/Navbar2/Navbar2";
// import Navbar3 from "./Components/Navbar3/Navbar3";
import Maindiv from "./Components/Maindiv/Maindiv";
// import SecondMain from "./Components/SecondMain/SecondMain";

function App() {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      {/* <Navbar3/> */}
      <Maindiv/>
      {/* <SecondMain/> */}
    </>
  );
}

export default App;
