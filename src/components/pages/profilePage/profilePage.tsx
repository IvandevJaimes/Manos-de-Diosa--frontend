import { useState } from "react";
import Navbar from "../../header/navbar.tsx";
import Footer from "../../footer/footer.tsx";
import Sidebar from "../../utils/sidebars/sidebar.tsx";
import ProfileMain from "./profile.tsx";
import Modal from "../../utils/modals/modal";
import EditAvatar from "./editAvatar.tsx";


import "./profilePage.css";

const ProfilePage = () => {
    const [open, setOpen] = useState(false);
    const handleToggle = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [isOpen, setIsOpen] = useState(false);
    const handleOnClose = () => setIsOpen(false);

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleOnClose} title="Editar avatar" children={<EditAvatar setIsOpen={setIsOpen}/>} className="modalEditProfile"/>

      <header className="sticky top-0 z-50">
        <Navbar handleOpen={handleToggle}></Navbar>
      </header>

      <>
        <Sidebar open={open} handleClose={handleClose} />
      </>
      <main>
        <ProfileMain setIsOpen={setIsOpen}></ProfileMain>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default ProfilePage;
