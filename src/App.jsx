import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Input from "./components/Input";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Header />
      <div className="body">
        <Sidebar />
        <Content />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
