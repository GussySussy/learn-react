import type { Employee } from "../../store/employee/employee.types";

export interface Department {
    name: string,
    id: number,
    employees: Employee[]
}

