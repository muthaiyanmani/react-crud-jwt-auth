import React from "react";
import Sidebar from "../../components/global/Sidebar";
import EmployeeList from "./EmployeeList";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <Sidebar>
      <EmployeeList />
    </Sidebar>
  );
};

export default Dashboard;
