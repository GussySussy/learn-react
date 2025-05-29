import {
  createBrowserRouter,
  Navigate,
  // Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Login, { isLoggedIn } from "./pages/login/Login";
import Dashboard from "./pages/employees/dashboard/Dashboard";
import CreateEmployee from "./pages/employees/createEmployee/CreateEmployee";
import Layout from "./components/layout/Layout";
import Details from "./pages/employees/details/Details";

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
    element: isLoggedIn() ? <Layout /> : <Login />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "create", element: <CreateEmployee /> },
      { path: ":id", element: <Details /> },
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
