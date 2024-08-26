import "./App.css";
import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { useEffect } from "react";
function App() {
  const activeMenu = false;
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
                 dark:bg-secondary-dark-bg
              bg-white"
            >
              sideBar
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
              Navbar
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element="adasf a Ecommerce" />
              <Route path="/ECommerce" element="afdaf dsf Ecommerce" />
              {/* pages */}
              <Route path="/orders" element="afdaf dsf orders" />
              <Route path="/employees" element="afdaf dsf employees" />
              <Route path="/customers" element="afdaf dsf customers" />
              {/* Apps */}
              <Route path="/kanban" element="afdaf dsf Kanban" />
              <Route path="/editor" element="afdaf dsf Editor" />
              <Route path="/calendar" element="afdaf dsf Calendar" />
              <Route path="/color-picker" element="afdaf dsf Color-picker" />
              {/* Charts */}
              <Route path="/line" element="afdaf dsf line" />
              <Route path="/area" element="afdaf dsf area" />
              <Route path="/bar" element="afdaf dsf bar" />
              <Route path="/pie" element="afdaf dsf pie" />
              <Route path="/financial" element="afdaf dsf financial" />
              <Route path="/color-mapping" element="afdaf dsf color-mapping" />
              <Route path="/pyramid" element="afdaf dsf pyramid" />
              <Route path="/stacked" element="afdaf dsf Stacked" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
