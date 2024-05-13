import gopay from './assets/gopay.png';
import ovo from './assets/ovo.png';
import dana from './assets/dana.png';
import shape1 from './wed-assets/header-shape-1.png';
import shape2 from './wed-assets/header-shape-2.png';

const Funds = () => {
    return ( 
        <div id='guests' className="content">
            <div className="contentTitle">
                <img src={shape1}/>
                <h1>Thank You</h1>
                <img src={shape2}/>
            </div>
            <div className="fundContent">
                {/* <table>
                    <tr>
                        <td><a href=""><img src={gopay} alt="" /></a></td>
                        <td rowSpan={2}><a href=""><img src={ovo} className="ovo" alt="" /></a></td>
                    </tr>
                    <tr>
                        <td><a href=""><img src={dana} alt="" /></a></td>  
                    </tr>                    
                </table> */}
                <h3>BCA: 4310384904 a/n Joshua</h3>
                <h3>BCA: 2801517040 a/n Yosiana</h3>
                <h1>Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/ibu/saudara/i berkenan hadir untuk memberikan doa restu bagi kedua mempelai pada syukuran ngunduh mantu.</h1>
            </div>
        </div>
    );
}
    
export default Funds;
