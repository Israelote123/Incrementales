import { BarraLat } from "../components/BarraLat/BarraLat";
import {Perfil} from '../components/Perfil/Perfil';
import {BarraLatRight} from '../components/BarraLatRight/BarraLatRight'
import {Spiderman} from '../components/Spiderman/Spiderman'
import { ThemeContext } from '../Context/AppContext'


function PerfilPage() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <BarraLat />
                    </div>
                    <div className="col-lg-6">
                        <Perfil/>
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

export {PerfilPage};