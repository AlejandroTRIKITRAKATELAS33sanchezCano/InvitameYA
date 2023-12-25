import { Routes, Route } from "react-router-dom";
import Index from "./views/Index";

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  )
}