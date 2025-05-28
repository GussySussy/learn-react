import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import CreateEmployee from "./pages/create-employee/CreateEmployee";
import Login from "./pages/login/Login";
import Layout from "./components/layout/Layout";
import EmployeeDashboard from "./pages/employee-dashboard/EmployeeDashboard";

export const isLoggedIn = () => {
  const token = localStorage.getItem("login");
  return token == "true";
};

const router = createBrowserRouter([
  {
    path: "/",
    element: isLoggedIn() ? <Navigate to="/employees" /> : <Login />,
  },
  {
    path: "/login",
    element: isLoggedIn() ? <Navigate to="/employees" /> : <Login />,
  },
  {
    path: "/employees",
    element: <Layout />,
    children: [
      { index: true, element: <EmployeeDashboard /> },
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
