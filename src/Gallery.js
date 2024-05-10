import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gal1 from './wed-assets/undangan digital Y&J/2 digital.jpg';
import gal2 from './wed-assets/undangan digital Y&J/3 digital.jpg';
import gal3 from './wed-assets/undangan digital Y&J/4 digital.jpg';
import gal4 from './wed-assets/undangan digital Y&J/8 digtial.jpg';
import gal5 from './wed-assets/undangan digital Y&J/9 digital.jpg';
import gal6 from './wed-assets/undangan digital Y&J/10 digital.jpg';
import gal7 from './wed-assets/undangan digital Y&J/12 digital.jpg';
import gal8 from './wed-assets/undangan digital Y&J/13 digital.jpg';
import shape1 from './wed-assets/header-shape-1.png';
import shape2 from './wed-assets/header-shape-2.png';

const Gallery = () => {
    
    return ( 
        <div id='gallery' className="content">
            <div className="contentTitle">
                <img src={shape1}/>
                <h1>Our Gallery</h1>
                <img src={shape2}/>
            </div>
            <div className="galleryContent">
                <img src={gal1} alt="gal1"></img>
                <img src={gal2} alt="gal2"></img>
                <img src={gal3} alt="gal3"></img>
                <img src={gal4} alt="gal4"></img>
                <img src={gal5} alt="gal5"></img>
                <img src={gal6} alt="gal6"></img>
                <img src={gal7} alt="gal7"></img>
                <img src={gal8} alt="gal8"></img>
            </div>
        </div>
    );
}   

export default Gallery;
