import React from 'react';
import { FaSistrix } from "react-icons/fa";

export default function Navbar(props) {

    return (
        <div className="row">
            <div className="col-md-6">
                <h1 className="title">Weather App</h1>


            <div className="col-md-6">
                <form action="" autocomplete="on" className="region" onSubmit={(e) => { props.changeLocation(e) }}>
                  <input type="text" className="regioninput" placeholder="Select your region" onChange={(p) => { props.changeRegion(p.target.value) }} />
                  <button type="submit" class="searchbutton"><FaSistrix/></button>
                </form>
            </div>
            </div>

        </div>
    )
}
