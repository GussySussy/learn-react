import {
  createBrowserRouter,
  // Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Dashboard from "./pages/employees/dashboard/Dashboard";
import CreateEmployee from "./pages/employees/createEmployee/CreateEmployee";
import Layout from "./components/layout/Layout";
// import CreateEmployee from "./pages/create-employee/CreateEmployee";
// import Login from "./pages/login/Login";
// import Layout from "./components/layout/Layout";
// import EmployeeDashboard from "./pages/employee-dashboard/EmployeeDashboard";

// export const isLoggedIn = () => {
//   const token = localStorage.getItem("login");
//   return token == "true";
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: isLoggedIn() ? <Navigate to="/employees" /> : <Login />,
//   },
//   {
//     path: "/login",
//     element: isLoggedIn() ? <Navigate to="/employees" /> : <Login />,
//   },
//   {
//     path: "/employees",
//     element: <Layout />,
//     children: [
//       { index: true, element: <EmployeeDashboard /> },
//       { path: "create", element: <CreateEmployee /> },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/employees",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "create", element: <CreateEmployee /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
