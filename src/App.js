import { Outlet } from "react-router-dom";
import BasicNavbar from "./component/Navbar";

function App() {
  return (
    <>
    <BasicNavbar/>
    <Outlet/>
    </>
  );
}

export default App;
