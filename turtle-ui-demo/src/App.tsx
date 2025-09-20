import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Chat from "./pages/Chat";

export default function App(){
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<AppLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="catalog" element={<Catalog/>}/>
          <Route path="chat" element={<Chat/>}/>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
