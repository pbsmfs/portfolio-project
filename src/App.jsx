import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Darkmode from "./components/Darkmode/Darkmode";
import ProjectList from "./components/ProjectList/ProjectList";
import Title from "./components/Title/Title";
import { useContext} from "react"
import { ThemeContext } from "./context";

 
const App = () => {
  const theme = useContext(ThemeContext)
  const toggled = theme.state.toggled

  return <div style={{ backgroundColor: toggled ? "#222" : "white", color: toggled && "white" }}>
      <Darkmode/>
      <Title/>
      <About/>
      <ProjectList/>
      <Contact/>
  </div>;
};

export default App;