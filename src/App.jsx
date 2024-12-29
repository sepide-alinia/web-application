import { useRoutes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "./routs/routers.jsx";

function App() {
  let rout = useRoutes(router);

  return (
    <>
      <ToastContainer></ToastContainer>
      {rout}
    </>
  );
}

export default App;
