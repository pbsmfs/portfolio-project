import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Darkmode from "./components/Darkmode/Darkmode";
import ProjectList from "./components/ProjectList/ProjectList";
import Title from "./components/Title/Title";
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
  console.log(toggled)
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
      {/* <Darkmode/> */}
      
      <RouterProvider router={router} />
      
      {/* 
      <About/>
      <ProjectList/>
      <Contact/> */}
  </div>;
};

export default App;