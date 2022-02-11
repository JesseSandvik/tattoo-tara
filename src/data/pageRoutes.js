import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import PortfolioPage from "../pages/PortfolioPage";

export const pageRoutes = [
    {
        name: "home",
        path: "/",
        element: <HomePage />
    },
    {
        name: "about",
        path: "/about",
        element: <AboutPage />
    },
    {
        name: "portfolio",
        path: "/portfolio",
        element: <PortfolioPage />
    },
    {
        name: "contact",
        path: "/contact",
        element: <ContactPage />
    }
]