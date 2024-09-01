import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/home-layout";
import Home from "./pages/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        {/*
        I'll implement this later
        <Route path="*" element={<NotFound />} /> 
        */}
      </Route>
    </Routes>
  );
}

export default App;
