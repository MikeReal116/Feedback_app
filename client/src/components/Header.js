import React from 'react'
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import { connect } from "react-redux";
import { Button } from "./Button";
import "./Header.css";

const Header = (props) => {
    return (
        <div className="header">
            <div className="header__logo">
                <FingerprintIcon />
            </div>
            <nav className="header__navigation">
               <ul>
                    <li className="header__navigation-item">
                        {props.auth!==null &&  props.auth ===false?<a className="header__navigation-link" href="/auth/google">{<Button buttonStyle="outline" buttonColor="purple">Login With Google </Button>}</a> : 
                        <a className="header__navigation-link" href="/api/logout">{<Button buttonStyle="outline" buttonColor="purple"> Logout</Button>}</a>
                        }
                    </li>
                    
               </ul> 
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{auth : state.auth}
}
export default connect(mapStateToProps)(Header);
