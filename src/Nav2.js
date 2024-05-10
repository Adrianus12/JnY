import Logo from './wed-assets/J&Y logo black.png';

const Nav2 = () => {
    
    
    return ( 
        
            <div className="contentNav">   
                <div className="nav" >
                    <img src={Logo} className="App-logo" alt="logo"/>
                    <div className="links">
                        <a href="#">Home</a>
                        <a href="#couple">Couple</a>
                        <a href="#story">Our Story</a>
                        <a href="#gallery">Our Gallery</a>
                        <a href="#events">Events</a>
                        <a href="#guests">Guests</a>
                    </div>
                </div>
            </div>
        
    );
}
export default Nav2;