import './Help.css';
import { connect } from "react-redux";
import { saveHelp, setLoading } from "../../redux/actions/help";
import { useLocalStorage } from '../../hooks/useLocalStorage'
import{useForm} from 'react-hook-form'

const mapStateToProps = (state) => {
    return {
        loading: state.helpReducer.loading,
        error: state.helpReducer.error,
    }
}

function Help({ saveHelp, setLoading, loading, error }) {
    
    const {
        register,
        handleSubmit,
        watch,
        formState:{errors},
        } = useForm() 

    const [user] = useLocalStorage("USER", {})

    const onSubmit = (payload) => {
      
        let data = {
            mail: user.mail,
            titulo: payload.titulo,
            consulta: payload.consulta,
            problemas: payload.problemas,
        };

        saveHelp(data)
       


    }

    return (
        <div className="Habilidades">
            <form onSubmit={handleSubmit( onSubmit)}>
                <div id="blue">
                    <h1>¿Necesitas ayuda?</h1>
                </div>

                <div className="mb-3">
                    <label  htmlFor="tituloHelp" className="form-label">Titulo</label>
                    <input 
                    {...register("titulo",{
                        required:true,
                      
                    } 
                    )}
                     name='titulo' type="text" className="form-control" id="tituloHelp" aria-describedby="emailHelp" />
                     {errors?.titulo?.type==="required" && <p className="alert alert-danger">This field is required</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor='consultaHelp' className="form-label">Consulta</label>
                    <input  
                    {...register("consulta",{
                        required:true,                      
                    } 
                    )} 
                    name='consulta' type="text" className="form-control" id="consultaHelp" aria-describedby="emailHelp" />
                </div>
                {errors?.consulta?.type==="required" && <p className="alert alert-danger">This field is required</p>}

                <div className="mb-3">
                    <label htmlFor='problemasHelp' className="form-label">Problemas comunes</label>
                    <input 
                     {...register("problemas",{                
                    } 
                    )} 
                   name='problemas' type="text" className="form-control" id="problemasHelp" aria-describedby="emailHelp" />
                </div>
                <button className="btn btn-primary" >Save</button>
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
export default connect(mapStateToProps, { saveHelp, setLoading })(Help);


