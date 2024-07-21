import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LogIn from "./pages/LogIn";
import BankSPRegistration from "./pages/BankSPRegistration";
import Desktop from "./pages/Desktop";
import SignUp from "./pages/SignUp";
import WelcomeServiceProvider from "./pages/WelcomeServiceProvider";
import ServiceProviderRegistration from "./pages/ServiceProviderRegistration";
import Dashboard from "./pages/Dashboard";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-1":
        title = "";
        metaDescription = "";
        break;

        case "/dashboard":
          title = "";
          metaDescription = "";
          break;
  
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/welcome-service-provider":
        title = "";
        metaDescription = "";
        break;
      case "/service-provider-registration":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      } 
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/desktop-1" element={<Desktop />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/bank-sp-registration" element={<BankSPRegistration />} />
      <Route
        path="/welcome-service-provider"
        element={<WelcomeServiceProvider />}
      />
      <Route
        path="/service-provider-registration"
        element={<ServiceProviderRegistration />}
      />
    </Routes>
  );
}
export default App;