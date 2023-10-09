import About from "../pages/About";
import Admin from "../pages/Admin";
import ProductManagement from "../pages/Admin/ProductManagement";
import Clients from "../pages/Clients";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Product from "../pages/Product";
import Services from "../pages/Services";
import Team from "../pages/Team";

export const privateRoute = [
  {
    path: "/admin",
    element: <Admin />,
    title: "Admin",
    children: [
      {
        path: "/admin/product-management",
        element: <ProductManagement />,
        title: "product-management",
      },
    ],
  },
];

export const publicRouter = [
  {
    path: "/",
    element: <Home />,
    title: "Home",
  },
  {
    path: "/services",
    element: <Services />,
    title: "Services",
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
    title: "Portfolio",
  },
  {
    path: "/about",
    element: <About />,
    title: "About",
  },
  {
    path: "/team",
    element: <Team />,
    title: "Team",
  },
  {
    path: "/contact",
    element: <Contact />,
    title: "Contact",
  },
  {
    path: "/clients",
    element: <Clients />,
    title: "Clients",
  },

  {
    path: "/product",
    element: <Product />,
    title: "Product",
  },
  {
    path: "/user",
    element: <Product />,
    title: "User",
  },
];
