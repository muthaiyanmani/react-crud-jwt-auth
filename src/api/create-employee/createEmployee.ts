import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import { request } from "../../utils/axios";

export const useAddEmployee = () => {
  const navigate = useNavigate();

  const createEmployee = (data: {
    name: string;
    email: string;
    mobile: string;
    salary: number;
  }) => {
    return request({ url: "/employee", method: "post", data });
  };

  const queryClient = useQueryClient();

  return useMutation(createEmployee, {
    onSuccess: ({ data }) => {
      queryClient.invalidateQueries("get-employee");
      navigate("/dashboard");
    },
  });
};
