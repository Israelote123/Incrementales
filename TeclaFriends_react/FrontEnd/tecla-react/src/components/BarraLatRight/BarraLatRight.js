
import './BarraLatRight.css';

function BarraLatRight() {
    return (
        <div className="BarraLatRight">
            <div className="nave card" >
                <div className="card-body gustos">
                <h5 className="card-title">Geek activity</h5>
                            <ul className="list-group">
                                <a data-bs-toggle="collapse" href="#collapseMovie" role="button" aria-expanded="false"
                                    aria-controls="collapseExample">
                                    <i className="fa-2x fas fa-ticket-alt"></i>
                                </a>
                                <li className="list-group-item">Movie premiere<div className="collapse" id="collapseMovie">
                                        <div className="card card-body gustos">
                                            Uncharted <br/>
                                            Sonic 2 <br/>
                                            The Northman <br/>
                                            The batman <br/>
                                            Doctor strange <br/>
                                            Jurassic World:Dominion <br/>
                                            Avatar 2 <br/>
                                            Super Mario <br/>
                                            
                                        </div>
                                    </div>
                                </li>

                                <a data-bs-toggle="collapse" href="#collapseSerie" role="button" aria-expanded="false"
                                    aria-controls="collapseExample">
                                    <i className="fa-2x fas fa-tv"></i>
                                </a>

                                <li className="list-group-item">New Series<div className="collapse" id="collapseSerie">
                                        <div className="card card-body gustos">
                                            The lord of the rings <br/>
                                            Halo <br/>
                                            The last of Us <br/>
                                            House of the dragon <br/>

                                        </div>
                                    </div>
                                </li>

                                <a data-bs-toggle="collapse" href="#collapseGame" role="button" aria-expanded="false"
                                    aria-controls="collapseExample">
                                    <i className="fa-2x fas fa-gamepad"></i>
                                </a>

                                <li className="list-group-item">Videogames<div className="collapse" id="collapseGame">
                                        <div className="card card-body gustos">
                                            God of War <br/>
                                            Leyendas Pokémon Arceus <br/>
                                            Uncharted: Legacy of Thieves Collection <br/>
                                        </div>
                                    </div>
                                </li>

                                <a data-bs-toggle="collapse" href="#collapseTec" role="button" aria-expanded="false"
                                    aria-controls="collapseExample">
                                    <i className="fa-2x fas fa-robot"></i>
                                </a>

                                <li className="list-group-item">Tecnology<div className="collapse" id="collapseTec">
                                        <div className="card card-body gustos">
                                            Facebook compra youtube <br/>
                                            WhatsApp prohibe enviar nudes
                                        </div>
                                    </div>
                                </li>

                                <a data-bs-toggle="collapse" href="#collapseJob" role="button" aria-expanded="false"
                                    aria-controls="collapseExample">
                                    <i className="fa-2x fas fa-laptop-house"></i>
                                </a>

                                <li className="list-group-item">News Job<div className="collapse" id="collapseJob">
                                        <div className="card card-body gustos">
                                            LinkeInd
                                            Computrabajo
                                            Indeed
                                            OCCMundial
                                        </div>
                                    </div>
                                </li>
                            </ul>                            



                </div>
            </div>
        </div>
    );
}

export { BarraLatRight };