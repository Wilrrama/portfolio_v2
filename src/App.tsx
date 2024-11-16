import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import Home from "./components/home";
import Projects from "./components/projects";
import { GlobalStyles } from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
