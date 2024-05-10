
import love1 from './wed-assets/undangan digital Y&J/1 digital.jpg';
import love2 from './wed-assets/undangan digital Y&J/5 digital.jpg';
import love3 from './wed-assets/undangan digital Y&J/6 digital.jpg';

import shape1 from './wed-assets/header-shape-1.png';
import shape2 from './wed-assets/header-shape-2.png';

const Story = () => {
    return ( 
        <div id='story' className="content">
            <div className="contentTitle">
                <img src={shape1}/>
                <h1>Our Story</h1>
                <img src={shape2}/>
            </div>
            <div className="storyDesc">
                <div className="storyContent">
                    <div className="storyText">
                        <h3>Berpacaran</h3>
                        <h1>6 July 2017</h1>
                    </div>
                    <div className="storyPic">
                        <img src={love1} alt="love1" />
                    </div>
                </div>                                            
                <div className="storyContent">
                    <div className="storyText">
                        <h3>Pertunangan</h3>
                        <h1>18 May 2023</h1>
                    </div>                    
                    <div className="storyPic">
                        <img src={love2} alt="love2" />
                    </div>
                </div>
                <div className="storyContent">
                    <div className="storyText">
                        <h3>Pernikahan</h3>
                        <h1>18 May 2024</h1>
                    </div>
                    <div className="storyPic">
                        <img src={love3} alt="love1" />
                    </div>
                </div>                    
            </div>
        </div>
    );
}
 
export default Story;