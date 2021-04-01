import React from 'react'
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "./Button";
import { handleToken } from "../actions";
import "./Header.css";

const Header = (props) => {

   const renderList = () => {
       switch(props.auth){
           case null:
               return;
            case false:
                return  <li className="header__navigation-item"><a className="header__navigation-link" href="/auth/google">{<Button buttonStyle="outline" buttonColor="purple">Login With Google </Button>}</a></li>;
            default:
                return [   
                    <li key="1" className="header__navigation-item">
                        <StripeCheckout 
                            token = {(token)=>props.handleToken(token)}
                            name ="Feedsmart"
                            description = "5€ for 10 credits"
                            currency = "EUR"
                            amount = {500}
                            stripeKey = {process.env.REACT_APP_STRIPE_KEY}
                        >
                        {<Button buttonStyle="primary" buttonColor="white">BUY CREDIT</Button>}
                        </StripeCheckout>
                    </li>,
                     <li key="2" className="header__navigation-item">{<Button buttonStyle="outline" buttonColor="black">{`Credits: ${""}${props.auth.credits}`}</Button>}</li>,
                    <li key="3"className="header__navigation-item"><a className="header__navigation-link" href="/api/logout">{<Button buttonStyle="outline" buttonColor="purple"> Logout</Button>}</a></li>
                ]

       }
   }

    return (
        <div className="header">
            <div className="header__logo">
                <Link to = {props.auth === false? "/":"/surveys"}><FingerprintIcon /></Link>
            </div>
            <nav className="header__navigation">
             
               <ul>
                   {renderList()}
               </ul> 
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{auth : state.auth}
}
export default connect(mapStateToProps, { handleToken })(Header);
