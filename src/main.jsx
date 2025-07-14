import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import LoginForm from "./views/LoginForm.jsx";
import Service from "./views/Service.jsx";
import Projects from "./views/Projects.jsx";

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/service" element={<Service />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  </BrowserRouter>
);
