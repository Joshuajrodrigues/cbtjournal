import { Navigate, Route, Routes } from "react-router-dom";
import { appRoutes } from "./AppConstants";
import Navbar from "./components/Navbar";
import CBTForm from "./forms/CBTForm";
import useUser from "./hooks/useUser";
import About from "./pages/About";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import History from "./pages/History";
import Welcome from "./pages/Welcome";


function App() {
  const user = useUser((state) => state.user);

  
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path={appRoutes.login} element={!user.id ? <Home /> : <Navigate to={appRoutes.root} />} />
        <Route path={appRoutes.signup} element={!user.id ? <Signup /> : <Navigate to={appRoutes.root} />} />
        <Route path={appRoutes.cbtForm} element={!user.id ? <Home /> : <CBTForm />} />
        <Route path={appRoutes.about} element={<About />} />
        <Route path={appRoutes.root} element={!user.id ? <Navigate to={appRoutes.login} /> : <Welcome />} />
        <Route path={appRoutes.historicalSubmites} element={!user.id ? <Navigate to={appRoutes.login} /> : <History />} />
        {/* <Route path={appRoutes.root} element={<Welcome />} /> */}
      </Routes>
    </div>
  );
}

export default App;
