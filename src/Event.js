
import evt1 from './wed-assets/undangan digital Y&J/11 digital.jpg';
import shape1 from './wed-assets/header-shape-1.png';
import shape2 from './wed-assets/header-shape-2.png';

const Event = () => {
    return ( 
        <div id='events' className="content">
            <div className="contentTitle">
                <img src={shape1}/>
                <h1>The Event</h1>
                <img src={shape2}/>
            </div>
            <div className="eventContent">                
                <div className="event1">
                    {/* <img src={evt1} alt="evt2" /> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1177.8696057788663!2d107.27206051538133!3d-6.7862397216907056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sKp.%20Rawaselang%2C%20Jln.%20Simatupang%2C%20RT%2001%2FRW%2006%20Desa%20Sindangjaya%2C%20Kec.%20Ciranjang%20Cianjur%20-%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1715155372326!5m2!1sen!2sid" width="600px" height="450px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div className="eventDesc">
                        <p className="date">25 Mei 2024 @11:00 - selesai</p>
                        <h3><span>Ngunduh Mantu</span></h3>
                        <p>Kp. Rawaselang,<br/> Jln. Simatupang, RT 01/RW 06<br/>Desa Sindangjaya, Kec. Ciranjang<br/>Cianjur - Jawa Barat</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Event;