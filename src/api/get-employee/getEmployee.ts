import { useQuery } from "react-query";
import { request } from "src/utils/axios";

export const useEmployee = () => {
  const fetchEmployee = () => {
    return request({ url: "/employee", method: "get" });
  };
  return useQuery("get-employee", fetchEmployee, {
    staleTime: 50000,
    refetchOnWindowFocus: true,
    select: (data) => {
      const result = data?.data ? data?.data.map((item: any) => item) : [];
      return result;
    },
  });
};
