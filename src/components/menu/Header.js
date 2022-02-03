import React from "react";
import "./Header.css";

const Header = () => {

  const menu = () => {
// const body = document.body;
// const triggerMenu = document.querySelector(".page-header .trigger-menu");
// // const nav = document.querySelector(".page-header nav");
// // const menu = document.querySelector(".page-header .menu");
// // const lottieWrapper = document.querySelector(".lottie-wrapper");
// const lottiePlayer = document.querySelector("lottie-player");
// const scrollUp = "scroll-up";
// const scrollDown = "scroll-down";
// let lastScroll = 0;

// triggerMenu.addEventListener("click", () => {
//   body.classList.toggle("menu-open");
// });

// lottieWrapper.addEventListener("click", (e) => {
//   e.preventDefault();
//   triggerMenu.click();
//   body.classList.toggle("menu-open-with-lottie");
// });

// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;
//   if (currentScroll <= 0) {
//     body.classList.remove(scrollUp);
//     return;
//   }
//   if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
//     body.classList.remove(scrollUp);
//     body.classList.add(scrollDown);
//     lottiePlayer.play();
//   } else if (
//     currentScroll < lastScroll &&
//     body.classList.contains(scrollDown)
//   ) {
//     body.classList.remove(scrollDown);
//     body.classList.add(scrollUp);
//     lottiePlayer.stop();
//   }
//   lastScroll = currentScroll;
// });

  }
  


  return (
    <>
      <header className="page-header">
        <nav>
          <div className="trigger-menu-wrapper">
            <button className="trigger-menu desplegue">
              <svg width="12" height="12" viewBox="0 0 24 24">
                <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
              </svg>
              <span>MENU</span>
            </button>
          </div>
          <ul className="menu">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Services
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
