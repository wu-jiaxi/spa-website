import "./App.css";
import TicketForm from "./components/Form/Form";
import Layout from "./components/Layout/Layout";
import Admin from "./components/Admin/Admin";
import SpaHomepage from "./components/SpaHomepage/SpaHomepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SpaHomepage />} />
        <Route element={<Layout />}>
          <Route path="form" element={<TicketForm />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
