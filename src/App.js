import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Settings from "./pages/Settings";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import MobileMenu from "./components/MobileMenu";
import Logo from "./assets/Content.png";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(
    window.innerWidth <= 769
  );

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      <>
        <div className="xl:hidden flex justify-between shadow-md  fixed w-full top-0 bg-white">
          <div className="py-4 px-6 flex">
            <img src={Logo} alt="Logo" className="w-8 h-8" />
            <h1 className="text-xl font-semibold ml-2">Dashboard UI</h1>
          </div>
          <div className="xl:hidden p-4">
            <button
              onClick={toggleSidebar}
              className="xl:hidden bg-[#53389E] p-2 focus:outline-none"
              data-testid="toggle-button"
            >
              <FiMenu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="flex h-screen pt-16 xl:pt-0">
          <div className="h-screen fixed top-[72px]">
            {isOpen && <MobileMenu data-testid="mobile-menu" />}
          </div>
          {!isMobileScreen && <Sidebar />}{" "}
          <div className="flex-1 overflow-y-auto h-screen">
            <Routes>
              <Route path="/" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;
