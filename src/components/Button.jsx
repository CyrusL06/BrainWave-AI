// rafce
// import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

function Button({ className, href, onClick, children, px, white }) {

  // Style that made the button on hero-section
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 
  ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  //👆🏼 if were passing specific size else default of 'px-7

  const spanClasses = "relative z-10";

  const renderButton = () => (
    // Calls out {const classes} up and get passed HERE
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  // If you want to pass Link
  function returnLink() {
    <a href={href} className={classes}>
      {/* {spanClasses} from above */}
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>;
  }
  // return if href prop exist then  renderLink else renderButton
  return href ? returnLink() : renderButton();
}

export default Button;
