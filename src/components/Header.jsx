"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import LocaleSwitcher from "./LocaleSwitcher";
import Container from "./Container";
import BurgerMenu from "./BurgerMenu";
import DeskNavMenu from "./DeskNavMenu";
import LinkWithUsBtn from "./LinkWithUsBtn";
import MobNavMenu from "./MobNavMenu";
import ModalForm from "./ModalForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Container>
        <header className="flex items-center justify-between py-[22px] lg:py-[25px]">
          <Logo />
          <DeskNavMenu />
          <LocaleSwitcher />
          <LinkWithUsBtn onClick={openModal} />
          <div className="lg:hidden">
            <BurgerMenu onClick={() => setIsMenuOpen(true)} />
          </div>
        </header>
      </Container>
      <MobNavMenu
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        openModal={openModal}
      />
      <ModalForm isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default Header;
