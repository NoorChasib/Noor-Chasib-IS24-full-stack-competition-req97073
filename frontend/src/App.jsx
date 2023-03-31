import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Table from "./components/Table";

function App() {
  return (
    <div className="app flex min-h-screen flex-col">
      <Navbar />
      <div className="content m-8 mb-16 flex flex-grow items-center justify-center">
        <Table />
      </div>
      <Footer />
    </div>
  );
}

export default App;
