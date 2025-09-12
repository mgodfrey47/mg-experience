"use client";

import { useState } from "react";
import PortfolioItem from '../components/PortfolioItem';
import portfolioItems from "../data/portfolioItems";
import Modal from "../components/Modal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const colours = [
    {border: "border-mg-orange", text: "text-mg-orange", background: "bg-mg-orange"},
    {border: "border-mg-teal", text: "text-mg-teal", background: "bg-mg-teal"},
    {border: "border-mg-pink", text: "text-mg-pink", background: "bg-mg-pink"},
  ]

  const openModal = (imgSrc) => {
    setModalImage(imgSrc);
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
    setModalImage("");
  }

  return (
    <>
      <div className="fixed top-[27rem] ml-2 dotted w-full h-[35rem]"></div>
      <div className="grid grid-cols-[1rem_1fr_1rem] md:grid-cols-[5rem_1fr_5rem] justify-items-center min-h-screen relative">
      <div className="border-r-9 border-mg-navy h-full w-full"></div>
      <main className="flex flex-col gap-[32px] items-center w-full px-4 md:px-8 2xl:px-20">
        <h1 className="text-[2rem] sm:text-[3rem] lg:text-[4rem] text-mg-navy font-bold mt-14 md:mt-32">Hi! I&apos;m Megan Godfrey.</h1>
        <p className="max-w-[40rem] text-lg">
          I&apos;m a front-end web developer with a background in neuroimaging research.
          I have a passion for translating complex requirements into user-friendly applications.
        </p>
        <p className="text-lg">
          Here are some examples of projects I’ve worked on...
        </p>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-x-10 2xl:gap-x-20 gap-y-8 my-4 md:my-16 w-full">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={item.id}
              item={item}
              colourClasses={colours[(index + Math.floor(index/3)) % 3]}
              openModal={openModal}
            />
          ))}
        </div>
      </main>
      <div className="border-l-9 border-mg-navy h-full w-full"></div>
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <img src={modalImage} alt="Enlarged image" className="w-full h-auto" />
      </Modal>
    </>

  );
}
