import { useState } from "react";

import Navbar from "../../header/navbar.tsx";
import CardSection1 from "./cardSectionColecciones.tsx";
import CardSection2 from "./cardSectionCategorias.tsx";
import Title from "./title.tsx";
import CarrouselMain from "./carrouselMain.tsx";
import Footer from "../../footer/footer.tsx";
import Sidebar from "../../utils/sidebars/sidebar.tsx";
import ModalLogin from "../../utils/modals/modal.tsx";
import LoginButtons from "../../utils/login/loginScreen.tsx";

import "./mainPage.css";

const MainPage = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleOnClose = () => setIsOpen(false);
  return (
    <>
      <header className="sticky top-0 z-50">
        <Navbar handleToggle={handleToggle} handleOpen={handleOpen}></Navbar>
      </header>
      <>
        <ModalLogin
          title="Iniciar Sesión"
          isOpen={isOpen}
          onClose={handleOnClose}
        >
          <LoginButtons></LoginButtons>
        </ModalLogin>
      </>
      <>
        <Sidebar open={open} handleClose={handleClose} />
      </>
      <main>
        <Title></Title>

        <CarrouselMain></CarrouselMain>

        <CardSection2></CardSection2>

        <CardSection1></CardSection1>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default MainPage;
