
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import PollSteps from "./pages/PollSteps"
import {loader as loaderPollSteps} from "./pages/PollSteps"
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import {loader as loaderDashboard} from "./pages/Dashboard"


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index loader={loaderPollSteps} element={<PollSteps />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" loader={loaderDashboard} element={<Dashboard />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
