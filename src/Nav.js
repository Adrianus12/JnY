import { useEffect, useState } from 'react';
import Logo from './wed-assets/J&Y logo black.png';

const Nav = () => {
    const [mobile, setMobile] = useState(window.innerWidth <= 992);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleOpen = () => setIsOpen((prev) => !prev);

    useEffect(() => {
        
        const windowResizeListener = () => setMobile(window.innerWidth <= 992);
        
        windowResizeListener();
        document.addEventListener("resize", windowResizeListener);
        
        return () => {
            document.removeEventListener("resize", windowResizeListener);
        };

    }, []);
    
    
    return ( 
        
            <div className="contentNav" style={{ maxHeight: mobile && isOpen ? "283px" : "73px" }}>   
                <div className="nav">
                    <img src={Logo} className="App-logo" alt="logo"/>
                    {mobile ? (
                        <button className="nav-hamburger" onClick={handleToggleOpen}>
                            <HamburgerIcon />
                        </button>
                    ) : (
                        <NavMenus />
                    )}
                </div>
                {mobile && <NavMenus />}
            </div>
        
    );
}

function HamburgerIcon() {
    

    return (
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    );

}

function NavMenus() {
    

    return (
        <div className="links">
            <a href="#">Home</a>
            <a href="#couple">Couple</a>
            <a href="#story">Story</a>
            <a href="#gallery">Gallery</a>
            <a href="#events">Event</a>
            {/* <a href="#guests">Guests</a> */}
        </div>
    );

}
 
export default Nav;