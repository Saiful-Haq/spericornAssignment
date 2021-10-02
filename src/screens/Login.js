

import React, { useState, useContext, useRef, useEffect } from 'react';
import { Formik, Form, Field, useFormik } from 'formik';
import { NavLink, useHistory } from "react-router-dom";
import * as yup from 'yup';
import { UserContext } from '../Context/UserContext';




const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter valid email"),
    password: yup

        .string()
        .required('Password is required')
})

function Login(props) {

    const { setIsLogin } = useContext(UserContext)
    const emailInputRef = useRef(null);

    const history = useHistory();


    useEffect(() => {
        emailInputRef.current.focus();
    }, []);

    function handleLogin() {

        //login APi  call code here 

        setIsLogin(prev => !prev)
       
        history.push(
            {
                pathname: '/Home'
            }
        )
    }


    return (
        <div className='registerBox'>
            <div style={{ fontSize: '20px', fontWeight: 'bold', paddingBottom: '10px' }}>LOGIN</div>
            <Formik
                initialValues={{
                    email: "",
                    password: ''
                }}
                validationSchema={loginValidationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    
                    handleLogin();

                    setSubmitting(false)

                }}
            >
                {(formik) => {

                    return (
                        <form onSubmit={formik.handleSubmit} >
                            <div className='flexbox'>
                                <div>
                                    <div>     Email address</div> <input type="email"
                                        ref={emailInputRef}
                                        placeholder="Email"
                                        onChange={formik.handleChange('email')}
                                        onBlur={formik.handleBlur('email')}
                                        value={formik.values.email}
                                        error={formik.errors.email}
                                    />
                                    {formik.errors.email && formik.touched.email && <span style={{ color: 'red', fontSize: '13px' }} >{formik.errors.email}</span>}
                                </div>
                                <div>
                                    <div>  Password  </div>
                                    <input

                                        type="password"
                                        placeholder="Password"
                                        onChange={formik.handleChange('password')}
                                        value={formik.values.password}
                                        error={formik.errors.password}
                                        onBlur={formik.handleBlur('password')}
                                    />
                                    {formik.errors.password && formik.touched.password && <span style={{ color: 'red', fontSize: '13px' }} >{" "} {formik.errors.password}</span>}

                                </div>
                                <div >

                                    <button style={{ fontSize: '17px', marginTop: '10px' }}
                                        type="submit"
                                    >
                                        Login
                                    </button>

                                </div>
                            </div>
                        </form>
                    );
                }}
            </Formik>

            <div >  <NavLink

                to="/Registration"
            >
                <div style={{ color: 'blue', fontSize: '14px' }}> Go to signup ? click here </div>
            </NavLink></div>
        </div>


    )
}
export default Login;