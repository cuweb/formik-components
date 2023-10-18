import Page from "../Home/Page";
import { useState } from "react";
import { Formik, Form } from "formik";
import FieldControl from "../components/FieldControl/FieldControl";
import FieldWrapper from "../components/FieldWrapper/FieldWrapper";

function JobAction() {
  const formOnSubmit = async (values) => {
    console.log(values);
  };
  const initialValues = {};
  const [loading, setLoading] = useState(false);
  const [requisitions, setRequisitions] = useState([]);

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

  const ActionOption = [
    {
      value: "1",
      key: "Correct",
    },
    {
      value: "2",
      key: "Approve",
    },
    {
      value: "3",
      key: "Return for Correction",
    },
    {
      value: "4",
      key: "Cancel Requisition",
    },
    {
      value: "5",
      key: "Terminate Payment",
    },
    {
      value: "6",
      key: "Extend Job",
    },
  ];

  console.log(SelectStatus);

  return (
    <>
      <Page>
        <div>
          <div className="space-y-6 bg-white px-4 py-8 md:px-0">
            <div>
              <h3 className="mb-8 pb-4 text-2xl font-bold text-gray-900">
                Job Action Screen
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

                  <FieldControl
                    control="select"
                    label="Status"
                    name="status"
                    options={SelectStatus}
                    required
                    maxWidth="md"
                    placeholder="select an option..."
                  />

                  <FieldWrapper cols={2}>
                    <FieldControl
                      control="date"
                      label="Start Date"
                      name="startDate"
                      placeholder="Enter start date"
                    />
                    <FieldControl
                      control="date"
                      label="End Date"
                      name="endDate"
                      placeholder="Enter end date"
                    />
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
                              requisitions.map((person) => (
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
                                    {person.eid}
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
                                                MISSING
                                              </dd>
                                            </div>
                                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                              <dt className="text-sm font-medium leading-6 text-gray-900">
                                                Hourly Rate of Pay
                                              </dt>
                                              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
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
                                                      {
                                                        jobDetail.nzrjlabAccountIndexCode
                                                      }
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                      {
                                                        jobDetail.nzrjlabFundCode
                                                      }
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                      {
                                                        jobDetail.nzrjlabOrgnCode
                                                      }
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                      {
                                                        jobDetail.nzrjlabAcctCode
                                                      }
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                      {
                                                        jobDetail.nzrjlabProgCode
                                                      }
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                      {
                                                        jobDetail.nzrjlabActivityDate
                                                      }
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                      {jobDetail.nzrjlabPercent}
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
                        <p> Need to add content to table body</p>
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
                    options={ActionOption}
                    helper="Please select the appropriate option"
                  />
                  <FieldControl
                    control="input"
                    label="Comment (optional)"
                    name="comment"
                    type="text"
                    placeholder="Comment"
                  />
                  <FieldControl
                    control="input"
                    label="Requested Changes"
                    name="requestedChanges"
                    type="text"
                    placeholder="Request Changes"
                    required
                  />
                  <FieldControl
                    control="input"
                    label="Reason for Cancellation"
                    name="reasonToCancell"
                    type="text"
                    placeholder="Reason"
                    required
                  />
                  <FieldControl
                    control="input"
                    label="Reason for Cancellation"
                    name="reasonToCancell"
                    type="text"
                    placeholder="Reason"
                    required
                  />

                  <FieldControl
                    control="date"
                    label="Last Day Worked"
                    name="lastDate"
                  />

                  <FieldControl
                    control="input"
                    label="Total hours worked in this job (Recurring jobs only)"
                    name="totalHoursWorked"
                    type="text"
                    placeholder="Total hours worked"
                    required
                  />
                  <FieldControl
                    control="date"
                    label="New End Date"
                    name="newEndDate"
                  />
                  <FieldControl
                    control="input"
                    label="Comment (optional)"
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
          </div>
        </div>
      </Page>
    </>
  );
}

export default JobAction;
