import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ProjectList from "./components/ProjectList/ProjectList";
import Title from "./components/Title/Title";

const App = () => {
  return <div>
    <Title/>
    <About/>
    <ProjectList/>
    <Contact/>
  </div>;
};

export default App;