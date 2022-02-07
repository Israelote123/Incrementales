//import './ShowCourses.css';
import { useEffect} from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage'

import{showCourse} from '../../redux/actions/showCourse'
import {showAbilities} from '../../redux/actions/showAbilities'
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
      curso:state.showCourseReducer.curso,
      finish:state.showAbilitieReducer.finish,
      abiliti:state.showAbilitieReducer.abiliti,
    };
  };

function ShowCourses({showCourse,showAbilities,curso,finish,abiliti}) {
    const [user]= useLocalStorage("USER",{})

    const mostrarCourses =  () => {
        showCourse(user.mail)   
        showAbilities(user.mail)       
    }

   useEffect(()=>{
    mostrarCourses()
   },[])

   
   
    return (
        <div className="ShowCourses">
            {finish &&
                <> 
                    <div className="row">
                    <h3 className="card-title">Cursos</h3> 
                        { curso.map(r =>                                                                                                                                                       
                                        <div className="col-lg-6">                                                                                            
                                            <div className="card">
                                                <div className="card-body">                                                
                                                    <h5 className="card-title">{r.nombre_curso}</h5>
                                                    <p className="card-text quote-text"><i>"{r.lugar_curso}"</i></p>
                                                    <p className="card-text quote-text"><i>"{r.fecha_curso}"</i></p>
                                                </div>
                                            </div>
                                        </div>                                                                 
                            )
                        }
                        <h3 className="card-title">Habilidades</h3>                                             
                        { abiliti.map(t =>                                                                                                                                                        
                          <div className="col-lg-6">                                                  
                            <div className="card">
                               <div className="card-body">
                                     <h5 className="card-title">{t.skill}</h5>
                                     <p className="card-text quote-text"><i>"{t.fecha}"</i></p>
                                </div>
                            </div>
                          </div>                                    
                         )
                        }
                    </div>
                </>
            }
        </div>
    );
}
export default connect(mapStateToProps, { showCourse,showAbilities })(ShowCourses);
