import { Outlet } from "react-router-dom";

import Footer from "../footer/footer";
import Header from "../header/header";

const Layout = () => {
  return (
    <>
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default Layout;
