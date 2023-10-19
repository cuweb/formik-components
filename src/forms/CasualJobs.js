import React from "react";
import Page from "../Home/Page";
import { Formik, Form } from "formik";
import FieldControl from "../components/FieldControl/FieldControl";
import FieldWrapper from "../components/FieldWrapper/FieldWrapper";

function CasualJobs() {
  const formOnSubmit = async (values) => {
    console.log(values);
  };
  const initialValues = { acknowledgement: [] };

  const SelectStatus = [
    {
      value: "",
      key: "Select Option",
    },
    {
      value: "S",
      key: "Saved",
    },
    {
      value: "M",
      key: "My",
    },
    {
      value: "P",
      key: "In-Progress",
    },
    {
      value: "X",
      key: "Cancelled",
    },
    {
      value: "C",
      key: "Complete",
    },
  ];

  const JobType = [
    {
      value: "1",
      key: "Job Type 1 ",
    },
    {
      value: "2",
      key: "Job Type 2",
    },
    {
      value: "3",
      key: "Job Type 3",
    },
    {
      value: "4",
      key: "Job Type 4",
    },
    {
      value: "5",
      key: "Job Type 5",
    },
    {
      value: "6",
      key: "Job Type 6",
    },
  ];

  return (
    <Page>
      <h3 className="mb-8 border-b pb-4 text-2xl font-bold text-gray-900">
        New Payroll Profile
      </h3>
      <Formik initialValues={initialValues} onSubmit={formOnSubmit}>
        {(formik) => (
          <Form>
            <div>
              <h4 className="mb-8 border-b pb-4 text-2xl font-bold text-gray-900">
                Section A: Enter Basic Information
              </h4>
            </div>

            <FieldControl
              control="select"
              label="Department"
              name="department"
              options={JobType}
              required
            />

            <FieldWrapper cols={2}>
              <FieldControl
                control="date"
                label="Start Date"
                name="startDate"
                placeholder="MMMM d, yyyy , --:--"
              />

              <FieldControl
                control="date"
                label="End Date"
                name="endDate"
                placeholder="MMMM d, yyyy , --:--"
              />
            </FieldWrapper>

            <div>
              <h4 className="mb-8 border-b pb-4 text-2xl font-bold text-gray-900">
                Section B: Payment Type
              </h4>
            </div>

            <FieldControl
              control="radio"
              label="Payment Type"
              name="paymentType"
              options={[
                {
                  value: "1",
                  key: "Recurring",
                },
                {
                  value: "2",
                  key: "Hourly",
                },
                {
                  value: "3",
                  key: "One-Time",
                },
              ]}
              maxWidth="md"
            />
            <FieldControl
              control="select"
              label="Job Type"
              name="jobType"
              options={JobType}
              maxWidth="md"
            />

            <div>
              <h4 className="mb-8 border-b pb-4 text-2xl font-bold text-gray-900">
                Section C: Funding Details (FOAP)
              </h4>
            </div>

            <FieldControl
              control="select"
              label="Select an Index"
              name="selectIndex"
              options={SelectStatus}
            />
            <FieldControl
              control="input"
              label="Fund"
              name="fund"
              type="number"
              placeholder="Enter fund amount"
              required
            />

            <FieldControl
              control="select"
              label="Account"
              name="selectIndex"
              options={SelectStatus}
            />

            <FieldControl
              control="input"
              label="Org"
              name="org"
              type="text"
              placeholder="Enter Org "
              // value={foapOrgnCode}
              required
            />

            <FieldControl
              control="input"
              label="Program"
              name="program"
              type="text"
              placeholder="Enter Program"
              // value={foapProgCode}
              required
            />

            <FieldControl
              control="input"
              label="Funding Source Allocation (%)"
              name="fundingSourceAllocation"
              type="number"
              placeholder="Enter Funding Source Allocation"
              required
            />

            <FieldWrapper cols={2}>
              <FieldControl
                control="input"
                label="Activity Code"
                name="activityCode"
                type="text"
                placeholder=" Code"
              />

              <FieldControl
                control="input"
                label="Activity"
                name="activity"
                type="text"
                placeholder="Name"
                value="ftvActivity.label"
                disabled
              />
            </FieldWrapper>

            <FieldControl
              control="input"
              label="Funding Source Allocation (%)"
              name="fundingSourceAllocation"
              type="number"
              placeholder="Enter Funding Source Allocation"
              required
            />

            <FieldControl
              control="radio"
              label="Add a second funding source"
              name="secondFundSource"
              options={[
                {
                  value: "1",
                  key: "Yes",
                },
              ]}
            />

            <div>
              <h4 className="mb-8 border-b pb-4 text-2xl font-bold text-gray-900">
                Section D: Employee Information
              </h4>
            </div>

            <FieldWrapper cols={3}>
              <FieldControl
                control="input"
                label="Employee ID"
                name="org"
                type="text"
                placeholder="Employee ID"
                required
              />
              <FieldControl
                control="input"
                label="First / Chosen Name"
                name="org"
                type="text"
                placeholder="First / Chosen Name "
                value="Banner First Name"
                disabled
              />

              <FieldControl
                control="input"
                label="Last Name"
                name="org"
                type="text"
                placeholder="Last Name"
                value="Banner Last Name"
                disabled
              />
            </FieldWrapper>

            <FieldControl
              control="radio"
              label="Action"
              name="action"
              options={[
                {
                  value: "1",
                  key: "Yes",
                },
                {
                  value: "0",
                  key: "No",
                },
              ]}
              required
            />

            <FieldControl
              control="input"
              label="Comment"
              name="comment"
              type="text"
              placeholder="Comment"
            />

            <h4 className="mb-8 border-b pb-4 text-2xl font-bold text-gray-900">
              Section G: Acknowledgements
            </h4>
            <FieldControl
              control="checkbox"
              name="acknowledgement"
              label="I acknowledge the statements above."
              options={[
                {
                  key: "yes",
                  value: "yes",
                },
              ]}
              required
            />

            <button
              type="submit"
              aria-label="Submit"
              className="inline-flex items-center justify-center gap-1 px-3 py-2 text-sm font-medium text-white rounded-md cu-button not-prose md:px-6 md:py-3 md:text-base hover:text-white focus:outline-none bg-cu-red hover:bg-cu-black-600"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Page>
  );
}

export default CasualJobs;
