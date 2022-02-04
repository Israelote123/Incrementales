import spider from './spider2.jpg'
import spiderBlack from './spiderman_negro.jpg'
//import spiderbebe from './bebespi.jpg'
import './Spiderman.css';
import { connect } from "react-redux";

const mapStateToProps = (state)=>{
    return{
      tema: state.themeReducer
    }
  }

function Spiderman({tema}) {

    return (
        <div className="container">
            {tema.background=="white"&& 
                  <div style={tema} className="Spiderman">
                  <img src={spider} className="tobey" alt='spiderman'></img>
                </div>
            }           
            {tema.background=="black"&& 
                <div style={tema} className="Spiderman">
                <img src={spiderBlack} className="andrew" alt='spiderman'></img>
                </div>
            }            
        </div>
    );
}
//export { Spiderman };
export default connect(mapStateToProps)(Spiderman);
