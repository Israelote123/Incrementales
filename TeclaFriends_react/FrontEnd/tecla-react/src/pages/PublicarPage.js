import { BarraLat } from "../components/BarraLat/BarraLat";
import {Publicar} from '../components/Publicar/Publicar';
import {BarraLatRight} from '../components/BarraLatRight/BarraLatRight'
import {Spiderman} from '../components/Spiderman/Spiderman'

import { ThemeContext } from '../Context/AppContext'



function PublicarPage() {

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div  className="col-lg-3">
                        <BarraLat />
                    </div>
                    <div className="col-lg-6">
                        <Publicar />
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

export { PublicarPage };