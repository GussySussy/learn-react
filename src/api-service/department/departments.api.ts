// import { url } from "inspector";
import type { Employee } from "../../store/employee/employee.types";
import baseApi from "../api";
import type { Department } from "./types";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDepartmentList: builder.query<Department[], void>({
      query: () => ({
        url: "/department",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetDepartmentListQuery } = departmentApi;
