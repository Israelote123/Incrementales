import { BarraLat } from "../components/BarraLat/BarraLat";
import {BarraLatRight} from '../components/BarraLatRight/BarraLatRight'
import Spiderman from '../components/Spiderman/Spiderman'
import ShowSolicitudes from '../components/ShowSolicitudes/ShowSolicitudes'

function MostrarSolicitudes() {
    return (  
        <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3">
                    <BarraLat />
                </div>
                <div className="col-lg-6">
                  <ShowSolicitudes/>
                </div>
                <div className="col-lg-3">
                    <BarraLatRight />
                    <Spiderman />
                </div>
            </div>
        </div>
    </div>
    );
}

export {MostrarSolicitudes};