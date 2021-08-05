import React, { useState } from "react";
import '../scss/signUp.scss'
import * as Icon from 'react-feather';
import { Link, NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import IconNetflix from "../assets/Icon/ic_netflix";
import IconCheckmark from "../assets/Icon/ic_checkmark";

const SignUp = () => {
    const backgroudUrl = 'https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png'

    const nextClicked = () => {

    }

    return (
        <div id='signUp'>
            <div className={`sign-up`}>
                <div className='sign-up__background-image'>
                </div>

                <div className={`sign-up__header`}>
                    <IconNetflix className={'sign-up__header__logo'} />
                    <Link >
                        Sign Out
                    </Link>
                </div>
                <div className={`sign-up__body`}>
                    <div className={`sign-up__body__content`}>
                        <div className={`sign-up__body__content__main`}>

                            <img className={`sign-up__body__content__main__image-devices`} src={backgroudUrl} />
                            <div >
                                <span class="sign-up__body__content__main__step-indicator" >STEP <b>2</b> OF <b>3</b>
                                </span>
                                <h1 class="sign-up__body__content__main__step-title">

                                    Choose your plan</h1>
                                <div class="sign-up__body__content__main__step-content">
                                    <span>
                                        <IconCheckmark className={`sign-up__icon-checkmark`} />
                                      <p>No commitments, cancel anytime.
                                          </p>  

                                    </span>
                                    <span>
                                        <IconCheckmark className={`sign-up__icon-checkmark`} />
                                      <p> Everything on Netflix for one low price.

                                          </p> 
                                    </span>
                                    <span>
                                        <IconCheckmark className={`sign-up__icon-checkmark`} />
                                      <p> No ads and no extra fees. Ever.

                                          </p> 
                                    </span>
                                    
                                </div>
                            </div>

                            <NavLink to='/regform'>
                                <button className={`sign-up__body__content__main__button-next`} >
                                    <span>Next
                                    </span>
                                </button>
                            </NavLink>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div>
                    <Footer style={{ background: '#f3f3f3' }} />
                </div>

            </div>

        </div>
    )
}
export default SignUp;