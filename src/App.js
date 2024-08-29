import "./App.css";
import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { useEffect } from "react";
import {
  Button,
  Cart,
  ChartsHeader,
  Chat,
  Footer,
  Header,
  Navbar,
  Notification,
  Sidebar,
  ThemeSetting,
  UserProfile,
} from "./components";
import {
  Calendar,
  ColorPicker,
  Customers,
  Ecommerce,
  Editor,
  Employee,
  Kanban,
  Orders,
  Area,
  Bar,
  ColorMap,
  Financial,
  Line,
  Pie,
  Pyramid,
  Stacked,
} from "./pages";

function App() {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="setting" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl  hover:bg-light-gray text-white"
                style={{ background: "gray", borderRadius: "50%" }}
              >
                <CiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div
              className=" w-72 fixed sidebar
            //      dark:bg-secondary-dark-bg  
            //   bg-white"
            >
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">sideBar </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg  min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/Ecommerce" element={<Ecommerce />} />
              {/* pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employee" element={<Employee />} />
              <Route path="/customers" element={<Customers />} />
              {/* Apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/colorPicker" element={<ColorPicker />} />
              {/* Charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/ColorMap" element={<ColorMap />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
