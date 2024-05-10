import bgHome from "./wed-assets/undangan digital Y&J/11 digital.jpg";


const Home = ({man,woman}) => {

const date = "25 May 2024";
const city = "Cianjur";
const country = "Jawa Barat";

    return (  
        // <div className="contentHome">
            <div className="imgWrap">
                <img src={bgHome} className="Home-bg" alt="bgHome" />             
                <div className="home">
                    <h1>NGUNDUH MANTU</h1>
                    <h5>{man} <span>&</span> {woman}</h5>
                    <p>{city}, {country}</p>
                    <h2>{date}</h2>
                </div>
            </div>
        // </div>
    
    );
}
 
export default Home;