
import './BarraLat.css';
function BarraLat() {
    return (
        <div className="BarraLat d-none d-lg-block">
                      <div className=" nave card" >
                          <div className=" gustos card-body">
                              <h5 className="card-title">New feeds</h5>
                              <ul className="list-group">
                                  <a className="enlace" data-bs-toggle="collapse" href="#collapsePlay" role="button"
                                      aria-expanded="false" aria-controls="collapseExample">
                                      <div className="circle-icon">
                                          <i className="fa-2x fas fa-headphones-alt"></i>
                                      </div>
                                  </a>
                                  <li className="list-group-item">Playlist to program<div className="collapse" id="collapsePlay">
                                          <div className="gustos card card-body">
                                              <a className='enlace playList' href="https://www.youtube.com/watch?v=GyGqV_PkfGo&list=PL7oskRpwwi_rG6BqlqkU8QKXO5gbhSFv2&index=1">One Hour of Chill Out Halo Music</a><br/>
                                              <a className='enlace playList' href="https://www.youtube.com/watch?v=Tf1DEI2lEe0&list=PL7oskRpwwi_rG6BqlqkU8QKXO5gbhSFv2&index=2">DOOM Eternal OST Remastered Version Full Official Soundtrack by Mick Gordon</a> <br/>
                                              <a className='enlace playList' href="https://www.youtube.com/watch?v=PAe0gyrDSyg">El muchacho de los ojos tristes</a><br/>
                                              <a className='enlace playList' href="https://www.youtube.com/watch?v=E20G25SCAEg">El triste</a><br/>
                                          </div>
                                      </div>
                                  </li>
                              
                                  <a className="enlace" data-bs-toggle="collapse" href="#collapseLearn" role="button"
                                      aria-expanded="false" aria-controls="collapseExample">
                                      <div className="circle-icon">
                                          <i className="fas fa-palette fa-2x"></i>
                                      </div>
                                  </a>
                                  <li className="list-group-item">I want to learn<div className="collapse" id="collapseLearn">
                                      <div className="card card-body gustos">
                                          Dance salsa <br/>
                                          Python <br/>
                                          Java <br/>
                                          Speak German <br/>
                                          Speak Japanese <br/>
                                      </div>
                                  </div></li>
                              
                                  <a className="enlace" data-bs-toggle="collapse" href="#collapsePlaces" role="button"
                                      aria-expanded="false" aria-controls="collapseExample">
                                      <div className="circle-icon">
                                          <i className="fa-2x fas fa-globe-americas"></i>
                                      </div>
                                  </a>
                                  <li className="list-group-item">Places to visit<div className="collapse" id="collapsePlaces">
                                      <div className="card card-body gustos ">
                                          Costa Amalfitana <br/>
                                          Machu Picchu <br/>
                                          Castillo de Neuschwanstein <br/> 
                                          Taj Mahal <br/>
                                          Cataratas Victoria <br/>
                                      </div>
                                  </div></li>

                                  <a className="enlace"  data-bs-toggle="collapse" href="#collapseCompany" role="button"
                                      aria-expanded="false" aria-controls="collapseExample">
                                      <div className="circle-icon">
                                          <i className="fa-2x fas fa-microchip"></i>
                                      </div>
                                  </a>
                                  <li className="list-group-item">companies to work for<div className="collapse" id="collapseCompany">
                                      <div className="card card-body gustos">
                                          Sony <br/>
                                          Amazon <br/>
                                          Meta <br/>
                                          Google <br/>
                                          Netflix <br/>
                                          Softtek <br/>
                                          Neoris <br/>
                                          Alestra <br/>
                                       </div>
                                  </div></li>

                                  <a className="enlace"  data-bs-toggle="collapse" href="#collapseGroups" role="button"
                                      aria-expanded="false" aria-controls="collapseExample">
                                      <div className="circle-icon">
                                          <i className="fa-2x fas fa-address-card"></i>
                                      </div>
                                  </a>
                                  <li className="list-group-item">Groups<div className="collapse" id="collapseGroups">
                                      <div className="card card-body gustos">
                                         Spidy fans <br/>
                                         Junors developers <br/>
                                         Marvel vs Dc <br/>                                       
                                       </div>
                                  </div></li>
                              </ul>
                          </div>
                      </div>


                     <div className=" nave card" >
                          <div className="card-body gustos">
                              <h5 className="card-title">Reviews(spoilers alert)</h5>
                              <ul className="list-group">
                                  <a className="enlace" data-bs-toggle="collapse" href="#collapseBooks" role="button"
                                      aria-expanded="false" aria-controls="collapseExample">
                                      <div className="circle-icon">
                                          <i className="fa-2x fas fa-book-open"></i>
                                      </div>
                                  </a>
                                  <li className="list-group-item">Books
                                      <div className="collapse" id="collapseBooks">
                                         <div className="gustos card card-body gustos">
                                           <a href="#" className='playList'>1984 </a><br/> 
                                           <a href="#" className='playList'>Un mundo feliz  </a><br/>
                                           <a href="#" className='playList'>La telaraña de charlotte </a><br/>
                                           <a href="#" className='playList'>Grandes esperanzas  </a><br/>
                                           <a href="#" className='playList'>El hombre invisible </a><br/> 
                                           <a href="#" className='playList'>El amor en tiempos de colera</a><br/> 
                                           <a href="#" className='playList'>El principito </a><br/> 
                                         </div>
                                     </div>
                                  </li>

                                  <a className="enlace" data-bs-toggle="collapse" href="#collapseMov" role="button"
                                      aria-expanded="false" aria-controls="collapseExample">
                                      <div className="circle-icon">
                                          <i className="fa-2x fas fa-video"></i>
                                      </div>
                                  </a>
                                  <li className="list-group-item">Movies<div className="collapse" id="collapseMov">
                                      <div className="gustos card card-body gustos">
                                         <a href="#" className='playList'>Spider-Man:no way home</a><br/> 
                                         <a href="#" className='playList'>Matrix 4</a><br/>
                                         <a href="#" className='playList'>Isla de perros</a><br/>
                                         <a href="#" className='playList'>Coach Carter</a><br/>
                                         <a href="#" className='playList'>Spider-Man:Into the Spider-Verse</a><br/> 
                                         <a href="#" className='playList'>Zack Snyder's Justice League</a><br/> 
                                         <a href="#" className='playList'>Batman: Under the Red Hood</a><br/> 
                                       </div>
                                  </div></li>

                                  <a className="enlace" data-bs-toggle="collapse" href="#collapseVi" role="button"
                                      aria-expanded="false" aria-controls="collapseExample">
                                      <div className="circle-icon">
                                          <i className="fa-2x fas fa-ghost"></i>
                                      </div>
                                  </a>
                                  <li className="list-group-item">Videogames<div className="collapse" id="collapseVi">
                                      <div className="gustos card card-body gustos">
                                         <a href="#" className='playList'>World of Warcraft</a><br/> 
                                         <a href="#" className='playList'>Super Mario Bros</a><br/>
                                         <a href="#" className='playList'>The Legend of Zelda</a><br/>
                                         <a href="#" className='playList'>Minecraft</a><br/>
                                         <a href="#" className='playList'>Grand Theft Auto IV</a><br/> 
                                         <a href="#" className='playList'>Gears of Wars</a><br/> 
                                         <a href="#" className='playList'>The Witcher 3: Wild Hunt</a><br/> 
                                       </div>
                                  </div></li>
  
                                
                                  <a className="enlace" data-bs-toggle="collapse" href="#collapseSe" role="button"
                                      aria-expanded="false" aria-controls="collapseExample">
                                      <div className="circle-icon">
                                          <i className="fa-2x fas fa-play-circle"></i>
                                      </div>
                                  </a>
                                  <li className="list-group-item">Series<div className="collapse" id="collapseSe">
                                      <div className="gustos card card-body gustos">
                                         <a href="#" className='playList'>Smallville</a><br/> 
                                         <a href="#" className='playList'>Justice league Unlimited</a><br/>
                                         <a href="#" className='playList'>The big bang theory</a><br/>
                                         <a href="#" className='playList'>Stranger things</a><br/>
                                         <a href="#" className='playList'>House of Cards</a><br/> 
                                         <a href="#" className='playList'>Batman: The Animated Series</a><br/> 
                                         <a href="#" className='playList'>The Witcher</a><br/> 
                                       </div>
                                  </div></li>

                                </ul>
                           </div>

                        </div>                            
        </div>
    );
}

export { BarraLat };