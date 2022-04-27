import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import { request } from "../../utils/axios";

export const useDeleteEmployee = () => {
  const deleteEmployee = (data: { id: number }) => {
    return request({ url: "/employee", method: "delete", data });
  };

  const queryClient = useQueryClient();
  return useMutation(deleteEmployee, {
    onSuccess: ({ data }) => {
      queryClient.invalidateQueries("get-employee");
    },
  });
};
