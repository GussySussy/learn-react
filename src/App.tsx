import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Login, { isLoggedIn } from "./pages/login/Login";
// import Dashboard from "./pages/employees/dashboard/Dashboard";
// import CreateEmployee from "./pages/employees/createEmployee/CreateEmployee";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/notFound/NotFound";
import { lazy, Suspense } from "react";
import LoadingScreen from "./pages/loadingScreen/LoadingScreen";
import { Provider } from "react-redux";
import store from "./store/store";

const Dashboard = lazy(() => import("./pages/employees/dashboard/Dashboard"));
const Details = lazy(() => import("./pages/employees/details/Details"));
const EditEmployee = lazy(
  () => import("./pages/employees/editEmployee/EditEmployee")
);
const CreateEmployee = lazy(
  () => import("./pages/employees/createEmployee/CreateEmployee")
);

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
      { index: true, element: <Dashboard /> },
      { path: "create", element: <CreateEmployee /> },
      { path: ":id", element: <Details /> },
      { path: "edit/:id", element: <EditEmployee /> },
      { path: "delete/:id", element: <EditEmployee /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </Suspense>
    </>
  );
}

export default App;
