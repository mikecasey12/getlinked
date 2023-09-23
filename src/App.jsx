import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import "./css/clash-display.css";
import "./fonts/ClashDisplay-Bold.woff";
import Home from "./pages/Home";
import AppLayout from "./layouts/AppLayout";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Error404 from "./pages/Error404";

const router = createBrowserRouter([
  {
    path: "/ikebude-michael/hackathon/",
    element: <AppLayout />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
