import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
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
import PrivateRoute from "./routes/PrivateRoute";
import AuthProvider from "./context/Auth/AuthProvider";
import ProfilePage from "./pages/Auth/ProfilePage";
import AdminPanel from "./pages/Auth/AdminPanel";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Otherlayout from "./layout/OtherLayout/Otherlayout";
import Adminlayout from "./layout/AdminLayout/Adminlayout";
import AddSaraylar from "./pages/AdminPanelPage/SaraylarAdmin/AddSaraylar";
import UptadeSaraylar from "./pages/AdminPanelPage/SaraylarAdmin/UptadeSaraylar";
import AdminDashboard from "./pages/AdminPanelPage/DashboardAdmin/AdminDashboard";
import AdminUsers from "./pages/AdminPanelPage/UsersAdmin/AdminUsers";
import AdminSaraylar from "./pages/AdminPanelPage/SaraylarAdmin/AdminSaraylar";
import AdminRestoranlar from "./pages/AdminPanelPage/RestoranlarAdmin/AdminRestoranlar";
import Adminfotovideo from "./pages/AdminPanelPage/FotoVideoAdmin/Adminfotovideo";
import AdminCicekler from "./pages/AdminPanelPage/CiceklerAdmin/AdminCicekler";
import AdminDJ from "./pages/AdminPanelPage/DJAdmin/AdminDJ";
import AdminAparici from "./pages/AdminPanelPage/ApariciAdmin/AdminAparici";
import AdminMusiqiQrupu from "./pages/AdminPanelPage/MusiqiQrupuAdmin/AdminMusiqiQrupu";
import AdminGelinlik from "./pages/AdminPanelPage/GelinlikAdmin/AdminGelinlik";
import AdminAvtomobil from "./pages/AdminPanelPage/AvtomobilAdmin/AdminAvtomobil";
import AdminGozellikSalonu from "./pages/AdminPanelPage/GozellikSalonuAdmin/AdminGozellikSalonu";
import AdminToyTortlari from "./pages/AdminPanelPage/ToyTortlariAdmin/AdminToyTortlari";
import WishList from "./pages/WishListPage/WishList";
import WishListProvider from "./context/WishListProvider/WishListProvider";

function App() {
  return (
    <>
      <HelmetProvider>
  <WishListProvider>
  <BrowserRouter>
          <AuthProvider>
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

                <Route path="/wishlist" element={<WishList />} />

                <Route path="*" element={<NoPage />} />
              </Route>

              <Route element={<Otherlayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>

              <Route element={<PrivateRoute />}>
                {" "}
                <Route path="/profil" element={<ProfilePage />} />
                <Route path="/admin/users" element={<AdminPanel />} />
              </Route>

              <Route element={<Adminlayout />}>
                {" "}
                <Route path="/addsaraylar" element={<AddSaraylar />} />
                <Route
                  path="/UptadeSaraylar/:id"
                  element={<UptadeSaraylar />}
                />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/users" element={<AdminUsers />} />
                <Route path="/admin/saraylar" element={<AdminSaraylar />} />
                <Route
                  path="/admin/restoranlar"
                  element={<AdminRestoranlar />}
                />
                <Route path="/admin/fotovideo" element={<Adminfotovideo />} />
                <Route path="/admin/dj" element={<AdminDJ />} />
                <Route path="/admin/aparici" element={<AdminAparici />} />
                <Route
                  path="/admin/musiqiqrupu"
                  element={<AdminMusiqiQrupu />}
                />
                <Route path="/admin/gelinlik" element={<AdminGelinlik />} />
                <Route path="/admin/avtomobil" element={<AdminAvtomobil />} />
                <Route
                  path="/admin/gozelliksalonu"
                  element={<AdminGozellikSalonu />}
                />
                <Route
                  path="/admin/toytortlari"
                  element={<AdminToyTortlari />}
                />
                <Route path="/admin/cicekler" element={<AdminCicekler />} />
              </Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
  </WishListProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
