import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Root from "./Root";
import { useContext} from "react"
import { ThemeContext } from "./context";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const App = () => {
  const theme = useContext(ThemeContext)
  const toggled = theme.state.toggled
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return <div style={{ backgroundColor: toggled ? "#222" : "white", color: toggled && "white" }}>     
      <RouterProvider router={router} />
  </div>;
};

export default App;