import React from "react";
import Page from "../Home/Page";
import { useState } from "react";
import { Formik, Form } from "formik";
import FieldControl from "../components/FieldControl/FieldControl";
import FieldWrapper from "../components/FieldWrapper/FieldWrapper";

function PayrollServices() {
  const initialValues = {};
  const [loading, setLoading] = useState(false);
  const formOnSubmit = async (values) => {
    console.log(values);
  };
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
      <div>
        <h3 className="mb-8 pb-4 text-2xl font-bold text-gray-900">
          Payroll Services
        </h3>
      </div>
      <Formik initialValues={initialValues} onSubmit={formOnSubmit}>
        {(formik) => (
          <Form>
            <div>
              <h4 className="mb-4 border-b pb-4 text-2xl font-bold text-gray-900">
                Filters
              </h4>
            </div>

            <FieldWrapper cols={2}>
              <FieldControl
                control="select"
                label="Status"
                name="status"
                options={JobType}
                required
              />

              <FieldControl
                control="select"
                label="Job Type"
                name="jobType"
                options={JobType}
                required
              />
            </FieldWrapper>

            <FieldWrapper cols={2}>
              <FieldControl
                control="date"
                label="Start Date"
                name="startDate"
              />

              <FieldControl control="date" label="End Date" name="endDate" />
            </FieldWrapper>

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
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full table-fixed divide-y divide-gray-300">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="relative px-7 sm:w-12 sm:px-6"
                        >
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
                          ID
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Name
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
                          Warnings
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Current Approver
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
                                    {person.apprId}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {person.name}
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
                                    {person.errorList}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {person.currLevel}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    <button
                                      className="text-cu-red"
                                      onClick={() =>
                                        loadModal(person.requisition)
                                      }
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
                                                Department
                                              </dt>
                                              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                {modelData.department}
                                              </dd>
                                            </div>
                                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                              <dt className="text-sm font-medium leading-6 text-gray-900">
                                                Hourly Rate of Pay
                                              </dt>
                                              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                $
                                                {
                                                  modelData?.job
                                                    .nzbjobrHourlyRate
                                                }
                                              </dd>
                                            </div>
                                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                              <dt className="text-sm font-medium leading-6 text-gray-900">
                                                Hours/Pay
                                              </dt>
                                              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                $
                                                {
                                                  modelData?.job
                                                    .nzbjobrHoursPerWeek
                                                }
                                              </dd>
                                            </div>
                                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                              <dt className="text-sm font-medium leading-6 text-gray-900">
                                                Total Amount / Pay
                                              </dt>
                                              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                $
                                                {
                                                  modelData?.job
                                                    .nzbjobrTotalHours
                                                }
                                              </dd>
                                            </div>
                                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                              <dt className="text-sm font-medium leading-6 text-gray-900">
                                                Total Amount
                                              </dt>
                                              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                $
                                                {
                                                  modelData?.job
                                                    .nzbjobrTotalAmountDue
                                                }
                                              </dd>
                                            </div>
                                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                              <dt className="text-sm font-medium leading-6 text-gray-900">
                                                Approver Name
                                              </dt>
                                              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                {modelData?.job.nzbjobrUserId}
                                              </dd>
                                            </div>
                                          </dl>
                                        </div>
                                      )}

                                      {modelData?.foaps?.length > 0 && (
                                        <div>
                                          <h4 className="mt-4 py-4 text-l font-bold text-gray-900">
                                            Funding Details
                                          </h4>
                                          <table className="min-w-full table-fixed divide-y divide-gray-300">
                                            <thead>
                                              <tr>
                                                <th
                                                  scope="col"
                                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                  Index#
                                                </th>
                                                <th
                                                  scope="col"
                                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                  Fund
                                                </th>
                                                <th
                                                  scope="col"
                                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                  Org
                                                </th>
                                                <th
                                                  scope="col"
                                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                  Account
                                                </th>
                                                <th
                                                  scope="col"
                                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                  Program
                                                </th>
                                                <th
                                                  scope="col"
                                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                  Activity
                                                </th>
                                                <th
                                                  scope="col"
                                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                  Allocation
                                                </th>
                                              </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 bg-white">
                                              {modelData?.foaps?.map(
                                                (jobDetail: any) => (
                                                  <tr key={jobDetail.index}>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                      {jobDetail.index}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                      {jobDetail.fund}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                      {jobDetail.org}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                      {jobDetail.account}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                      {jobDetail.program}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                      {jobDetail.activity}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                      {jobDetail.allocation}
                                                    </td>
                                                  </tr>
                                                )
                                              )}
                                            </tbody>
                                          </table>
                                        </div>
                                      )}

                                      {modelData?.decisions?.length > 0 && (
                                        <div>
                                          <h4 className="mt-4 py-4 text-l font-bold text-gray-900">
                                            Decision Details
                                          </h4>
                                          <table className="min-w-full table-fixed divide-y divide-gray-300">
                                            <thead>
                                              <tr>
                                                <th
                                                  scope="col"
                                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                  Date
                                                </th>
                                                <th
                                                  scope="col"
                                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                  Approver
                                                </th>
                                                <th
                                                  scope="col"
                                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                  Role
                                                </th>
                                                <th
                                                  scope="col"
                                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                  Decision
                                                </th>
                                                <th
                                                  scope="col"
                                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                  Comments
                                                </th>
                                              </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 bg-white">
                                              {modelData?.decisions.map(
                                                (decicionDetail: any) => (
                                                  <tr key={decicionDetail.id}>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                      {decicionDetail.decnDate}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                      {decicionDetail.apprName}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                      {
                                                        decicionDetail.apprLevelDesc
                                                      }
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                      {decicionDetail.decnDesc}
                                                    </td>
                                                    <td className="whitespace-wrap px-3 py-4 text-sm text-gray-500">
                                                      {
                                                        decicionDetail.decnComment
                                                      }
                                                    </td>
                                                  </tr>
                                                )
                                              )}
                                            </tbody>
                                          </table>
                                        </div>
                                      )}
                                    </Modal>
                                  </td>
                                </tr>
                              ))}
                          </tbody> */}
                  </table>
                </div>
              </div>
            </div>
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
                  key: "Load to Banner",
                },
                {
                  value: "2",
                  key: "Delete (Manual Entry)",
                },
                {
                  value: "3",
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

export default PayrollServices;
