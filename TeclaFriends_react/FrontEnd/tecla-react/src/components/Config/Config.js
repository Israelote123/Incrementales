import { useState, useContext } from 'react';
import { ThemeContext,themes } from '../../Context/AppContext'

function Config() {

    const [modo, modoState] = useState(useContext(ThemeContext));
    const[state,setState]=useState()
   
    const modoFunction = (e) => {
        setState(modo.dark)
        console.log("dark")
        console.log(state)
    }

    const modoFunction2 = (e) => {
        setState(modo.light)
        console.log("light")
        console.log(state)
        //console.log(e.target.value)
    }
    return (
        <div>

            <div className="form-check form-switch">
                <input className="form-check-input" type="radio" role="switch" name="modo" id="flexSwitchCheckDefault" onChange={modoFunction} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="radio" role="switch" name="modo" id="flexSwitchCheckChecked" onChange={modoFunction2} />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">light</label>
            </div>
        </div>

    );
}

export { Config };