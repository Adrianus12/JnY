import logo from './wed-assets/J&Y logo black.png';
import flower from './wed-assets/flwer.png'

const Footer = ({man,woman}) => {
    return (  
        <div className="contentFooter">
            <img src={flower} className='flwr' alt="flower" />
            <div className="footer">
                <div className="footerTop">
                    <img src={logo} alt="logo" />
                    <h5>{man} <span>&</span> {woman}</h5>
                    <div className="menu">
                        <a href="#">Home</a>
                        <a href="#couple">Couple</a>
                        <a href="#story">Story</a>
                        <a href="#gallery">Gallery</a>
                        <a href="#events">Event</a>
                        {/* <a href="#guests">Guests</a> */}
                    </div>
                    <div className="endLine"></div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;