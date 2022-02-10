import { connect } from "react-redux";
import {saveFeedback} from "../../redux/actions/feedback"
import {useLocalStorage} from "../../hooks/useLocalStorage"

 const mapStateToProps = (state) => {
    return {
      dataSearch : state.searchReducer.dataSearch,
      error: state.feedbackReducer.error
    }
  }

function FormFeedback({  dataSearch,saveFeedback,error  }) {
    const [user]= useLocalStorage("USER",{})

   
    const onSubmit = (event) => {
        event.preventDefault()
        let data = {
            mail: dataSearch.mail,
            author:user.mail,
            name: event.target[0].value,
            feedback: event.target[1].value,
            commit: event.target[2].value,
        };

        console.log(data)
        saveFeedback(data)
        event.target.reset()
    }



    return (
<div className="Habilidades">
            <form id="feedback" onSubmit={onSubmit}>
                <div >
                    <h4> FeedbackFriend</h4>
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre (opcional)</label>
                    <input name='nombreC' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Feedback</label>
                    <input required name='nombreC' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Comentarios extras <br></br> (opcional)</label>
                    <input name='nombreC' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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