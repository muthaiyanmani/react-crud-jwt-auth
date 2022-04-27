import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import { request } from "../../utils/axios";

export const useEditEmployee = (id: string) => {
  const navigate = useNavigate();

  const editEmployee = (data: {
    name: string;
    email: string;
    mobile: string;
    salary: number;
  }) => {
    return request({ url: `/employee/${id}`, method: "put", data });
  };
  const queryClient = useQueryClient();

  return useMutation(editEmployee, {
    onSuccess: ({ data }) => {
      queryClient.invalidateQueries("get-employee");
      navigate("/dashboard");
    },
  });
};
