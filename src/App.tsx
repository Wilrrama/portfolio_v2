import About from "./components/about";
import Header from "./components/header";
import Home from "./components/home";
import { GlobalStyles } from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Home />
      <About />
    </>
  );
}

export default App;
