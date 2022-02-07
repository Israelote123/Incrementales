import './Help.css';
import { connect } from "react-redux";
import { saveHelp,setLoading } from "../../redux/actions/help";
import { useLocalStorage } from '../../hooks/useLocalStorage'

const mapStateToProps = (state)=>{
    return{
      loading: state.helpReducer.loading,
      error: state.helpReducer.error,
    }
  }

function Help({saveHelp,setLoading,loading,error}) {
    
    
    const [user]= useLocalStorage("USER",{})

    const onSubmit= (event) => {
        event.preventDefault() 
        let  data = {
            mail: user.mail,
            titulo: event.target[0].value,
            consulta:event.target[1].value,
            problemas:event.target[2].value,       
        };

      
            saveHelp(data)
            event.target.reset()
        

    }
      
    return (
        <div className="Habilidades">
            <form   onSubmit={onSubmit}>
                <div id="blue">
                    <h1>¿Necesitas ayuda?</h1>
                </div>
                <div className="mb-3">
                    <label className="form-label">Titulo</label>
                    <input required name='nombreC' type="text" className="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Consulta</label>
                    <input required name='nombreC' type="text" className="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Problemas comunes</label>
                    <input required name='nombreC' type="text" className="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
        
      
                    <button  className="btn btn-primary" >Save</button>

          

              
                 {error && (
                  <div className="alert alert-danger" role="alert">
                     No es posible conectar con la base de datos
                   </div>
                )}

            </form>
            <div>
            </div>
            
        </div>
    );
}
export default connect(mapStateToProps, {saveHelp,setLoading} )(Help);


