import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAddEmployee } from "src/api/create-employee/createEmployee";
import { useEditEmployee } from "src/api/edit-employee/editEmployee";
import { useEmployeeById } from "src/api/get-employee-by-id/getEmployee";
import Sidebar from "src/components/global/Sidebar";

type Props = {};

const CreateEmployee = (props: Props) => {
  const { mutate } = useAddEmployee();
  const initialValue = {
    name: "",
    email: "",
    mobile: "",
    salary: 0,
  };

  const formik = useFormik({
    initialValues: initialValue,
    onSubmit: (values) => mutate(values),
  });

  return (
    <Sidebar>
      <div className="mt-10 md:mt-32">
        <div className=" md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1"></div>
          <div className="mt-5 md:mt-0 ">
            <form onSubmit={formik.handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <h4 className="text-lg">Create a employee</h4>
                  <br />
                  <div className="">
                    <div className="my-2">
                      <label
                        htmlFor="first-name"
                        className="block my-2 text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        autoComplete="given-name"
                        className="block h-10 px-2 mt-1 border-2 border-gray-400 rounded-md shadow-sm w-96 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <br />
                    <div className="my-2">
                      <label
                        htmlFor="first-name"
                        className="block my-2 text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        autoComplete="given-name"
                        required
                        className="block h-10 px-2 mt-1 border-2 border-gray-400 rounded-md shadow-sm w-96 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <br />
                    <div className="my-2">
                      <label
                        htmlFor="first-name"
                        className="block my-2 text-sm font-medium text-gray-700"
                      >
                        Mobile
                      </label>
                      <input
                        type="text"
                        name="mobile"
                        value={formik.values.mobile}
                        onChange={formik.handleChange}
                        autoComplete="given-name"
                        required
                        className="block h-10 px-2 mt-1 border-2 border-gray-400 rounded-md shadow-sm w-96 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <br />
                    <div className="">
                      <label
                        htmlFor="first-name"
                        className="block my-2 text-sm font-medium text-gray-700"
                      >
                        Salary
                      </label>
                      <input
                        type="text"
                        name="salary"
                        value={formik.values.salary}
                        onChange={formik.handleChange}
                        autoComplete="given-name"
                        required
                        className="block h-10 px-2 mt-1 border-2 border-gray-400 rounded-md shadow-sm w-96 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="flex justify-between w-96">
                    <button
                      onClick={formik.handleReset}
                      className="px-4 py-2 bg-gray-400 border border-gray-500 rounded-md outline-none"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-gray-400 border border-gray-500 rounded-md outline-none"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default CreateEmployee;
