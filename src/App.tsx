import FormExample from "./forms/FormExample";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobForm from "./forms/JobForm";
import Home from "./Home/Home";
import Nav from "./Home/Nav";
import JobAction from "./forms/JobAction";
import EmployeeApproval from "./forms/EmployeeApproval";
import PayrollServices from "./forms/PayrollServices";
import ResearchFinancial from "./forms/ResearchFinancial";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobForm" element={<JobForm />} />
        <Route path="/formExample" element={<FormExample />} />
        <Route path="/jobAction" element={<JobAction />} />
        <Route path="/employeeApproval" element={<EmployeeApproval />} />
        <Route path="/payrollServices" element={<PayrollServices />} />
        <Route path="/researchFinancial" element={<ResearchFinancial />} />
      </Routes>
    </Router>
  );
}

export default App;
