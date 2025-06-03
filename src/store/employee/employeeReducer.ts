import {
  EMPLOYEE_ACTION_TYPES,
  type Employee,
  type EmployeeAction,
  type EmployeeState,
} from "./employee.types";

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// export function employeeReducer(
//   state: EmployeeState = initialState,
//   action: EmployeeAction
// ) {
//   switch (action.type) {
//     case EMPLOYEE_ACTION_TYPES.UPDATE:
//       console.log("UPDATE");
//       return {
//         ...state,
//         employees: state.employees.map((employee) =>
//           employee.employeeId == action.payload.employeeId
//             ? action.payload
//             : employee
//         ),
//       };
//     case EMPLOYEE_ACTION_TYPES.DELETE:
//       console.log("DELETE");
//       return {
//         ...state,
//         employees: state.employees.filter(
//           (employee) => employee.employeeId != action.payload
//         ),
//       };
//     case EMPLOYEE_ACTION_TYPES.CREATE:
//       console.log("CREATE", action.payload);
//       return {
//         ...state,
//         employees: [...state.employees, action.payload],
//       };
//     default:
//       return state;
//   }
// }

const initialState: EmployeeState = {
  employees: [],
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },
    updateEmployee: (state, action: PayloadAction<Employee>) => {
      console.log("was here");
      state.employees.map((employee) =>
        employee.employeeId == action.payload.employeeId
          ? action.payload
          : employee
      );
    },
  },
});

export const { addEmployee, updateEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
