import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  HelmetProvider } from 'react-helmet-async';
import NoPage from "./pages/NoPage/NoPage";
import Contact from "./pages/Contact/Contact";
import Layout from "./layout/MainLayout/Layout";
import Home from "./pages/Home/Home";
import Saraylar from "./pages/Saraylar/Saraylar";
import Restoranlar from "./pages/Restoranlar/Restoranlar";
import Aparici from "./pages/Aparici/Aparici";
import Gelinlik from "./pages/Gelinlik/Gelinlik";
import FotoVideo from "./pages/FotoVideo/FotoVideo";
import DJ from "./pages/DJ/DJ";
import GozellikSalonu from "./pages/GozellikSalonu/GozellikSalonu";
import Avtomobil from "./pages/Avtomobil/Avtomobil";
import ToyTortlari from "./pages/ToyTortlari/ToyTortlari";
import Cicekler from "./pages/Cicekler/Cicekler,";
import MusiqiQrupu from "./pages/MusiqiQrupu/MusiqiQrupu";
function App() {
  return (
    <> 
     <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/restoranlar" element={<Restoranlar />} />
            <Route path="/aparici" element={<Aparici />} />
            <Route path="/gelinlik" element={<Gelinlik />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/saraylar" element={<Saraylar />} />
            <Route path="/fotovideo" element={<FotoVideo />} />
            <Route path="/dj" element={<DJ />} />
            <Route path="/avtomobil" element={<Avtomobil />} />
            <Route path="/toytortlari" element={<ToyTortlari />} />
            <Route path="/gozelliksalonu" element={<GozellikSalonu />} />
            <Route path="/cicekler" element={<Cicekler />} />
            <Route path="/musiqiqrupu" element={<MusiqiQrupu />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
