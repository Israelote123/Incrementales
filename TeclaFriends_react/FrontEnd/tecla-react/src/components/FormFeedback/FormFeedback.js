import { connect } from "react-redux";
import {saveFeedback} from "../../redux/actions/feedback"
import {useLocalStorage} from "../../hooks/useLocalStorage"
import{useForm} from 'react-hook-form'

 const mapStateToProps = (state) => {
    return {
      dataSearch : state.searchReducer.dataSearch,
      error: state.feedbackReducer.error
    }
  }

function FormFeedback({  dataSearch,saveFeedback,error  }) {
    const {
        register,
        handleSubmit,
        watch,
        formState:{errors},
        } = useForm() 

    const [user]= useLocalStorage("USER",{})

   
    const onSubmit = (payload) => {
        
        let data = {
            mail: dataSearch.mail,
            author:user.mail,
            name: payload.name,
            feedback: payload.feedback,
            commit: payload.commit,
        };

        saveFeedback(data)
        
    }



    return (
<div className="Habilidades">
            <form id="feedback" onSubmit={handleSubmit(onSubmit)}>
                <div >
                    <h4> FeedbackFriend</h4>
                </div>

                <div className="mb-3">
                    <label htmlFor="nombreF" className="form-label">Nombre (opcional)</label>
                    <input 
                     {...register("name",{
                      
                      
                    } 
                    )} 
                    name='name' type="text" className="form-control" id="nombreF" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="feedbackCon" className="form-label">Feedback</label>
                    <input 
                     {...register("feedback",{
                        required:true,
                      
                    } 
                    )} 
                     name='feedback' type="text" className="form-control" id="feedbackCon" aria-describedby="emailHelp" />
                    {errors?.feedback?.type==="required" && <p className="alert alert-danger">This field is required</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="Comment" className="form-label">Comentarios extras <br></br> (opcional)</label>
                    <input 
                      {...register("commit",{
                        required:true,
                      
                    } 
                    )} 
                    name='commit' type="text" className="form-control" id="Comment" aria-describedby="emailHelp"/>
                    {errors?.commit?.type==="required" && <p className="alert alert-danger">This field is required</p>}
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

export default connect(mapStateToProps, {saveFeedback})(FormFeedback);