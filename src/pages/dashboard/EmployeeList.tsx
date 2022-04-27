import { EyeIcon, PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import { Link, useParams } from "react-router-dom";
import { useDeleteEmployee } from "src/api/delete-employee/deleteEmployee";
import { useEmployee } from "src/api/get-employee/getEmployee";

interface Employee {
  name: string;
  email: string;
  mobile: string;
  salary: number;
  id: number;
}
export default function EmployeeList() {
  const { data, isLoading } = useEmployee();
  const { mutate } = useDeleteEmployee();

  const handleDelete = (id: number) => {
    // eslint-disable-next-line no-restricted-globals
    let result = confirm("Are you sure you want to delete?");
    if (result) {
      mutate({ id });
    } else {
      return;
    }
  };
  return (
    <>
      <div className="mt-10 overflow-x-auto ">
        <div className="py-2 sm:px-6 lg:px-16">
          <div className="mt-10 overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            {isLoading ? (
              <h1>Loading...</h1>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Mobile
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Salary
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((person: Employee) => (
                    <tr key={person.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {person.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {person.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {person.mobile}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {person.salary}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        <div className="flex space-x-10 lg:space-x-20">
                          <div className="">
                            <Link
                              to={`/dashboard/${person.id}`}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              <PencilAltIcon className="w-5 h-5" />
                              Edit
                            </Link>
                          </div>
                          <div>
                            <button
                              onClick={() => handleDelete(person.id)}
                              className="flex flex-col items-center text-indigo-600 hover:text-indigo-900"
                            >
                              <TrashIcon className="w-5 h-5" /> Delete
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
