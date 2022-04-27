import { useQuery } from "react-query";
import { request } from "src/utils/axios";

export const useEmployeeById = (id: string) => {
  const fetchEmployeeById = () => {
    return request({ url: `/employee/${id}`, method: "get" });
  };
  return useQuery("get-employee-by-id", fetchEmployeeById, {
    staleTime: 0,
    refetchOnWindowFocus: true,
    select: (data) => {
      return data.data;
    },
  });
};
