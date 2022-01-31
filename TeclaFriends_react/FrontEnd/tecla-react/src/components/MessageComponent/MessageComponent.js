import { ThemeContext } from '../../Context/AppContext'
import {useContext} from 'react'


function MessageComponent() {
   
    const { modo, modoState } = useContext(ThemeContext)
    let vari=1; 
   console.log(modo.background)   
    return (
        <div>
            <div className="collapse text_m" id="collapseExample">
                <div style={{background:"trasparent"}} className="">
                    <form className="ctn-bars-search d-flex align-items-center">
                        <input style={{ width: "90%" }} className="form-control me-2" id="inputMessage" type="search"
                            placeholder="Buscar" aria-label="Search" />
                        
                        <i className="fas fa-search fa-lg" id=""></i>
                    </form>
                    <div id="message-container">
                       
                    </div>
                </div>
            </div>
          
           {modo.background=="black"&&
                    <a className="clase1 down" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
                    aria-controls="collapseExample">
                    <div className="clase1">
                        <i className="clase1 far fa-comment-dots fa-4x"></i>
                    </div>
                </a>
           }
         

           
        </div>
    );
}

export { MessageComponent };