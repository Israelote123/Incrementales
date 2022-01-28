import { BarraLat } from "../components/BarraLat/BarraLat";
import {PerfilSearch} from '../components/PerfilSearch/PerfilSearch';
import {BarraLatRight} from '../components/BarraLatRight/BarraLatRight'
import {Spiderman} from '../components/Spiderman/Spiderman'
import { ThemeContext } from '../Context/AppContext'


function SearchPerfil() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <BarraLat />
                    </div>
                    <div className="col-lg-6">
                        <PerfilSearch/>
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

export {SearchPerfil};