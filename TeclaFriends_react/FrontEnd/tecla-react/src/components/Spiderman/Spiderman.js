import spider from './spider2.jpg'
import './Spiderman.css';



function Spiderman() {
    return (
        <div className="container">
            
            <div className="Spiderman">
              <img src={spider} className="tobey" alt='spiderman'></img>
            </div>
            
        </div>
    );
}
export { Spiderman };