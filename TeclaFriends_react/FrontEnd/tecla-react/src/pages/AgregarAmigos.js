import { Nav } from "../components/Nav/Nav";
import { BarraLat } from "../components/BarraLat/BarraLat";
import {AmigosAgregar} from '../components/AmigosAgregar/AmigosAgregar';
import {BarraLatRight} from '../components/BarraLatRight/BarraLatRight'
import {Spiderman} from '../components/Spiderman/Spiderman'


function AgregarAmigos() {
    return (
        <div>
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <BarraLat />
                    </div>
                    <div className="col-lg-6">
                        <AmigosAgregar/>
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

export {AgregarAmigos};