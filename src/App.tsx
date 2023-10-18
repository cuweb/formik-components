import FormExample from "./forms/FormExample";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobForm from "./forms/JobForm";
import Home from "./Home/Home";
import Nav from "./Home/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobForm" element={<JobForm />} />
        <Route path="/formExample" element={<FormExample />} />
      </Routes>
    </Router>
  );
}

export default App;
