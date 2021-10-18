import React, { useState, Component } from "react";
import './signIn.scss'
import * as Icon from 'react-feather';
import { NavLink } from "react-router-dom";
import { CustomInput, Footer } from "../../components";
import { IconNetflix } from "../../assets/Icon";

import {connect} from 'react-redux';
import {userLoginFetch} from '../../services/redux/actions';

const SignIn = () => {
    const backgroudUrl = 'https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/f50f46d7-13f0-4412-a37c-34808af2dd0c/VN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg'

    const state = {
        username: "",
        password: ""
      }
    
    const handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault()
        this.props.userLoginFetch(state)
    }

    return (
        <div id='signIn'>
            <div className={`sign-in`}>
                <div className='sign-in__background-image'>
                    <img className={`sign-in__background-image__image-style`} src="https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/f50f46d7-13f0-4412-a37c-34808af2dd0c/VN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/f50f46d7-13f0-4412-a37c-34808af2dd0c/VN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/f50f46d7-13f0-4412-a37c-34808af2dd0c/VN-en-20210719-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/f50f46d7-13f0-4412-a37c-34808af2dd0c/VN-en-20210719-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt="" />
                </div>
                <div className={`sign-in__header`}>
                    {/* <img className={`sign-in__header__logo`}
                        src='https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg' alt='logo'
                    /> */}
                    <IconNetflix className={`sign-in__header__logo`}/>
                </div>
                <div className={`sign-in__body`}>
                    <div className={`sign-in__body__content`}>
                        <form className={`sign-in__body__content__main`} onSubmit={handleSubmit}>
                            <h1 className={`sign-in__body__content__main__title`}>Sign In</h1>

                            <CustomInput
                                placeHolder='Please enter a valid email or phone number.'
                                label='Enter your email or phone'
                                type='text'
                                value={state.username}
                                onChange={handleChange} />
                            <CustomInput
                                placeHolder='Your password must contain between 4 and 60 characters.'
                                label='Password'
                                type='password'
                                value={state.password}
                                onChange={handleChange} />
                            {/* <NavLink to='/home' > */}
                                <button className={`sign-in__body__content__main__button-sign-in`} type='submit'>
                                    <span> Sign In
                                    </span>
                                </button>
                            {/* </NavLink> */}
                            <span>
                                <span>
                                    <input type='checkbox' />
                                    <span> Remember Me</span>
                                </span>
                                <NavLink to='/help' >
                                    Need Help?
                                </NavLink>
                            </span>
                            <div style={{ display: 'flex', flexDirection: 'row',color:'#c8c8c8',size:'14',marginTop:'40px',justifyContent:'center' }}>
                             <span> Don't have account yet? 
                                 </span>   
                                <NavLink className={`sign-up`} to='/signup/registration' >
                                      Sign Up
                                </NavLink>
                            </div>


                        </form>
                        <div>

                        </div>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>

            </div>

        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
  })
  
  export default connect(null, mapDispatchToProps)(SignIn);
// export default SignIn;