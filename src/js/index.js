//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

const counterStyle = {
    background: "black",
}

const iconStyle = {
    fontSize: "40px",
    color: "white",
    marginTop: "15px",
    textAling: "center"
}

const numberStyle = {
    fontSize: "50px",
    color: "white",
    textAling: "center"
}

function Counter(props) {
    return (
        <div className="container mt-4 rounded" style={counterStyle}>
            <div className="row">
                <div className="col rounded">
                    <i className="fas fa-clock" style={iconStyle}>
                    </i>
                </div>
                <div className="col rounded" style={numberStyle}>{props.Sixth % 10}</div> 
                <div className="col rounded" style={numberStyle}>{props.Fifth % 10}</div> 
                <div className="col rounded" style={numberStyle}>{props.Fourth % 10}</div> 
                <div className="col rounded" style={numberStyle}>{props.Third % 10}</div> 
                <div className="col rounded" style={numberStyle}>{props.Second % 10}</div> 
                <div className="col rounded" style={numberStyle}>{props.First % 10}</div> 
            </div> 
        </div>          

    )
}

let time = 0;

setInterval(function() {
    let sixth = Math.floor(time / 100000);
    let fifth = Math.floor(time / 10000);
    let fourth = Math.floor(time / 1000);
    let third = Math.floor(time / 100); 
    let second = Math.floor(time / 10);
    let first = Math.floor(time / 1); 
    time++,

    ReactDOM.render(<Counter Sixth={sixth} Fifth={fifth} Fourth={fourth} Third={third} Second={second} First={first}/>, document.querySelector("#app"));
}, 1000)

Counter.propTypes ={ 
    Sixth: propTypes.number,
    Fifth: propTypes.number,
    Fourth: propTypes.number,
    Third: propTypes.number,
    Second: propTypes.number,
    First: propTypes.number,
}


