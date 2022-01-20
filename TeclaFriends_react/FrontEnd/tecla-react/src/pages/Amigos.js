import { Nav } from "../components/Nav/Nav";
import { BarraLat } from "../components/BarraLat/BarraLat";
import {ShowFriends} from '../components/ShowFriends/ShowFriends';
import {BarraLatRight} from '../components/BarraLatRight/BarraLatRight'
import {Spiderman} from '../components/Spiderman/Spiderman'


function Amigos() {
    return (
        <div>
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <BarraLat />
                    </div>
                    <div className="col-lg-6">
                        <ShowFriends/>
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

export {Amigos};