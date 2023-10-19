// src/components/Home.js
import React from "react";
import Page from "./Page";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Page>
      <div>
        <h1 className="text-2xl font-bold leading-7">
          Welcome to the RDS Forms project{" "}
        </h1>

        <ul className="justify-center font-medium mb-10 ">
          <li className="hover:text-red-500">
            <Link to="/formExample">Form Example</Link>
          </li>
        </ul>
        <h2 className="text-xl font-bold leading-7">Job Forms example forms</h2>
        <ul className="justify-center font-medium ">
          <li className="hover:text-red-500">
            <Link to="/casualJobs">Casual Jobs</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/jobAction">Job Action</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/employeeApproval">Employee Approval</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/payrollServices">Payroll Services</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/researchFinancial">Research Financial</Link>
          </li>
        </ul>
      </div>
    </Page>
  );
}

export default Home;
