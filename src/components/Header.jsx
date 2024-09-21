// Npm install scroll-lock so they cant scroll on the menu
import { disablePageScroll, enablePageScroll} from 'scroll-lock'
import { brainwave } from "../assets";
import {navigation} from "../constants";
// When tap on the nav it sends signal which one is tap
import {useLocation} from 'react-router-dom';
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import {HamburgerMenu} from "./design/Header"
import { useState } from 'react';


const Header = () => {

    // Determines which location is pressed
    const pathName = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);


    function toggleNavigation(){
        if(openNavigation){
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }   
    };

    // We click and ready to go to the #
    function handleClick() {
        // If not
        if(!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    }


  return (
    //Navigation Container
    // modifying div into template string to checki when open===true then...
    <div className={`fixed top-0 left-0 z-50 w-full 
     border-b border-n-8 lg:bg-n-8/90 
    lg:backdrop-blur-sm ${openNavigation ? 
    'bg-n-8/90': `bg-n-8/90 backdrop-blur-sm` } `}>
        
      <div className=" flex items-center px-5 lg:px-7.5 
      xl:px-10 max-lg:py-4">

        {/* Logo */}
        <a className="block w-[12rem] xl:mr-8" href="#hero">
            <img src={brainwave} width={190} height={40}  alt="Brainwave"/>
        </a>

        {/* Navigation Menu */}
        <nav className={` ${openNavigation ? 'flex' : 'hidden'}
        fixed top-[5rem] left-0
        right-0 bottom-0 bg-n-8 lg:static lg:flex
        lg:mx-auto lg:bg-transparent`}>

            <div className="relative z-2 flex flex-col
            items-center justify-center m-auto
            lg:flex-row    ">
                {/* Mapps through all of the navigation data */}
                {navigation.map((item) => (
                    <a 
                    key={item.id} 
                    href={item.url}
                    onClick={handleClick}
                       className= {`block relative font-code
                      text-2xl uppercase text-n-1 transition-colors hover:text-color-1 
                      ${item.onlyMobile ? 'lg:hidden': ''} 
                      px-6 py-6 md:py-8 lg:-mr-0.25 
                      lg:text-xs lg:font-semibold 
                
                        //{Turns the navigation white when presed}
                      ${item.url === pathName.hash ? `z-2 lg:text-n-1`: `lg:text-n-1/50` } 
                      lg:leading-5  lg:hover:text-n-1 xl:px-12`}>
                        {item.title}
                    </a>
                ))}
          </div>
          <HamburgerMenu/>
        </nav>  

        {/* Signs Up Button */}
        <a href="#SignUp" className="button hidden mr-8 text-n-1/50 
        transition-colors hover:text-n-1 lg:block">
        New Account
        </a>

         {/* larger device visible */}
       <Button className="hidden lg:flex" href="#login">
        Sign In
      </Button>

      <Button 
      className="ml-auto lg:hidden"
      px="px-3"
     onClick={toggleNavigation}
     >
            <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
