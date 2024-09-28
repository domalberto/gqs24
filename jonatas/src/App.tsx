import Description from "./components/Description";
import About from "./components/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/Homepage";

function App() {
  return (
    <>
      <div className="font-Lexend bg-gradient-to-br from-branco_1 to-branco_2">
        <Header />
        <main>
          <Home />
          <About />
          <Description />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
