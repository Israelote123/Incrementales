import './Momos.css';
import { useState } from 'react';


function Momos() {
    const [save, setSave] = useState([0]);
    const [state, setState] = useState(true);

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <img className="momo card-img-top" src={save.url} alt="..." />
                </div>
            </div>
        </div>
    );
}

export { Momos };