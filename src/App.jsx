import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customer = React.lazy(() => import("./pages/Customer"));

const ErrorPage = React.lazy(() => import("./components/ErrorPage"));
const CustomerMap = React.lazy(() => import("./components/CustomerMap"));
const PageHeader = React.lazy(() => import("./components/PageHeader"));
const PieChartCard = React.lazy(() => import("./components/PieChartCard"));

const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));

const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

const Loading = React.lazy(() => import("./components/Loading"));

// Halaman error
const Error400 = () => (
  <ErrorPage code="400" description="Bad Request" />
);

const Error401 = () => (
  <ErrorPage code="401" description="Unauthorized" />
);

const Error403 = () => (
  <ErrorPage code="403" description="Forbidden" />
);

const NotFound = () => (
  <ErrorPage code="404" description="Page Not Found" />
);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customer" element={<Customer />} />

          <Route path="/error-400" element={<Error400 />} />
          <Route path="/error-401" element={<Error401 />} />
          <Route path="/error-403" element={<Error403 />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
}

export default App;