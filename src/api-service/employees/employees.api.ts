// import { url } from "inspector";
import type { Employee } from "../../store/employee/employee.types";
import baseApi from "../api";

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createEmployee: builder.mutation<Employee, Employee>({
      query: (payload) => ({
        url: "/employee",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["EMPLOYEES"],
    }),
    getEmployeeList: builder.query<Employee[], void>({
      query: () => ({
        url: "/employee",
        method: "GET",
      }),
      providesTags: ["EMPLOYEES"],
    }),
    getEmployeeById: builder.query<Employee, number>({
      query: (id) => ({
        url: `/employee/${id}`,
        method: "GET",
      }),
    }),
    updateEmployee: builder.mutation<
      Employee,
      { id: number; payload: Employee }
    >({
      query: ({ id, payload }) => ({
        url: `/employee/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["EMPLOYEES", "EMPLOYEE_DETAILS"],
    }),
    deleteEmployeebyId: builder.mutation<string, number>({
      query: (id) => ({
        url: `/employee/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["EMPLOYEES"],
    }),
  }),
});

export const {
  useCreateEmployeeMutation,
  useGetEmployeeListQuery,
  useGetEmployeeByIdQuery,
  useUpdateEmployeeMutation,
  useDeleteEmployeebyIdMutation,
} = employeeApi;

// import type { Employee } from "../../store/employee/employee.types";
// import baseApi from "../api";
// import type { getEmployeeListResponse } from "./types";

// const employeeApi = baseApi.injectEndpoints({
//     endpoints: (builder) => ({
//         getEmployeeList: builder.query<getEmployeeListResponse,void>({
//             query: () => ({
//                 url: "/employees",
//                 method: "GET",
//             }),
//             providesTags: ['EMPLOYEES']
//         }),
//     }),
// });
// export const {useGetEmployeeListQuery} = employeeApi
