import { createBrowserRouter } from "react-router-dom";

import App, { loader as users } from "./App";
import ErrorPage from "./ErrorPage";
import Profile from "./components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);
export default router;
