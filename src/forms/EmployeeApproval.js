import React, { useState } from "react";
import Page from "../Home/Page";
import { Formik, Form } from "formik";
import FieldControl from "../components/FieldControl/FieldControl";

function EmployeeApproval() {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    // firstname: "",
    // lastname: "",
    // email: "",
    // description: "",
    // selectOption: "",
    // radioOption: "",
    // checkboxOption: [],
    // birthDate: null,
    // autoSuggestCountry: "",
  };
  const onSubmit = (values) => console.log("Form data", values);
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

  return (
    <Page>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(formik) => (
          <Form>
            <div>
              <h3 className="mb-8 pb-4 text-2xl font-bold text-gray-900">
                Employee Approval
              </h3>
            </div>
            <div>
              <h4 className="mb-4 border-b pb-4 text-2xl font-bold text-gray-900">
                Filters
              </h4>
            </div>

            {/* <Form.Select
              label="Status"
              name="status"
              options={SelectStatus}
              onChange={(event: any) =>
                setSearchField({
                  ...searchField,
                  status: event?.target.value,
                })
              }
            /> */}
            <FieldControl
              control="select"
              label="Status"
              name="status"
              options={SelectStatus}
              required
              maxWidth="md"
              placeholder="select an option..."
            />

            <button
              name="search"
              className="inline-flex items-center justify-center gap-1 px-3 py-2 text-sm font-medium text-white rounded-md cu-button not-prose md:px-6 md:py-3 md:text-base hover:text-white focus:outline-none bg-cu-red hover:bg-cu-black-600"
            >
              {loading ? "Searching..." : "Search"}
            </button>

            <div>
              <h4 className="mb-4 border-b py-4 text-2xl font-bold text-gray-900">
                Select a requisition for more detail
              </h4>
            </div>

            <table className="min-w-full table-fixed divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                    <input
                      type="checkbox"
                      className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Req#
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Job Description
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Payment Type
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Start Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    End Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              {/* <tbody className="divide-y divide-gray-200 bg-white">
                {requisitions &&
                  requisitions.length > 0 &&
                  requisitions.map((person: any) => (
                    <tr key={person.apprId}>
                      <td className="relative px-7 sm:w-12 sm:px-6">
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          value={person.apprId}
                        />
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.requisition}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.jobTitle}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.paymentType}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.beginDate}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.endDate}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.statusDesc}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button
                          className="text-cu-red"
                          onClick={() => loadModal(person.requisition)}
                        >
                          View
                        </button>

                        <Modal
                          modalOpen={modalOpen}
                          setModalOpen={setModalOpen}
                        >
                          {modelData?.job && (
                            <div>
                              <h4 className="py-4 text-l font-bold text-gray-900">
                                Job Details
                              </h4>
                              <dl className="divide-y divide-gray-100">
                                <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                  <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Hourly Rate of Pay
                                  </dt>
                                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {modelData?.job.nzbjobrHourlyRate}
                                  </dd>
                                </div>
                                <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                  <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Hours/Pay
                                  </dt>
                                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    ${modelData?.job.nzbjobrHoursPerWeek}
                                  </dd>
                                </div>
                                <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                  <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Total Amount / Pay
                                  </dt>
                                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    ${modelData?.job.nzbjobrTotalHours}
                                  </dd>
                                </div>
                                <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                  <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Total Amount
                                  </dt>
                                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    ${modelData?.job.nzbjobrTotalAmountDue}
                                  </dd>
                                </div>
                              </dl>
                            </div>
                          )}
                        </Modal>
                      </td>
                    </tr>
                  ))}
              </tbody> */}
            </table>

            <div>
              <h4 className="mb-4 border-b py-4 text-2xl font-bold text-gray-900">
                Action
              </h4>
            </div>
            <FieldControl
              control="radio"
              label="Action"
              name="action"
              options={[
                {
                  value: "1",
                  key: "Accept Payment",
                },
                {
                  value: "2",
                  key: "Return for Correction",
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

export default EmployeeApproval;
