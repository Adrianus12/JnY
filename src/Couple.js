import manImg from './wed-assets/undangan digital Y&J/man.jpeg'
import womanImg from './wed-assets/undangan digital Y&J/woman.jpeg'
import flower from './wed-assets/flwer.png'
import shape1 from './wed-assets/header-shape-1.png';
import shape2 from './wed-assets/header-shape-2.png';

const Couple = ({man,woman}) => {
    return ( 
        <div id="couple" className="content">
            <div className="contentTitle">
                <img src={shape1}/>
                <h1>Lovely Couple</h1>
                <img src={shape2}/>
            </div>
            <div className="descCouple">
                <div className="man">
                    <img src={manImg} alt="manImg" />
                    <div className="desc">                        
                        <img src={flower} className='flwr2' alt="" />
                        <h1>{man}ri Permadinata Marchasan</h1>                        
                        <p>Putra pertama dari</p>
                        <p>Bpk. Mediarto Marchasan & Ibu Dianti</p>
                        {/* <ul>
                            <li><a href="">ig</a></li>
                            <li><a href="">fb</a></li>
                            <li><a href="">tw</a></li>
                        </ul> */}
                    </div>
                </div>
                <div className="woman">
                    <img src={womanImg} alt="womanImg" />
                    <div className="desc">                        
                        <img src={flower} className='flwr2' alt="" />
                        <h1>{woman} Albertha Putri Crystal</h1>                        
                        <p>Putri tunggal dari</p> 
                        <p>Bpk. Yosafat & Ibu Fransina Charlotha</p>
                        {/* <ul>
                            <li><a href="">ig</a></li>
                            <li><a href="">fb</a></li>
                            <li><a href="">tw</a></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Couple;