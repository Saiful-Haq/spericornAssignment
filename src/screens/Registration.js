import React, { useState ,useRef,useEffect} from 'react';
import { Formik } from 'formik';

import * as yup from 'yup';
import axios from 'axios';
const signupValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter valid email")
        .required('Email address is required'),
    password: yup

        .string()
        .matches(
            /^(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters and One Special Case Character"
        )
        .required('Password is required'),

    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    Username: yup
        .string()
        .required(),
    mobile: yup

        .string()
        .required()
        .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')

})


function Registration(props) {

    const emailInputRef = useRef(null);


    useEffect(()=>{
        emailInputRef.current.focus();
      }, []);

    const handleSubmitClick = (e) => {
        const data = {
            email: e.email,
            password: e.password,
            username: e.Username,
            phone: e.mobile
        }

        console.log(e);

        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNjhhZDg2YjkzYzJhNjViMGE0ODI3NiIsImlhdCI6MTU4MzkzMDgzOSwiZXhwIjoxNTg4MTA2NzcwNDMxfQ.hxbn0jG-zndbyiG6Eo6KOMUfHv3YGv3DmgaGjgCiFyo',
        //     },
        //     body: JSON.stringify(data)
        // };

        //     fetch("https://devgroceryapi.spericorn.com/api/auth/register",requestOptions )
        //     .then(function(res){ console.log( res); })
        //     .catch((err)=>{console.log(err)})
        // .then(function(data){ alert( JSON.stringify( data ) ) })

        const headers = {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNjhhZDg2YjkzYzJhNjViMGE0ODI3NiIsImlhdCI6MTU4MzkzMDgzOSwiZXhwIjoxNTg4MTA2NzcwNDMxfQ.hxbn0jG-zndbyiG6Eo6KOMUfHv3YGv3DmgaGjgCiFyo',
            // 'My-Custom-Header': 'foobar'
        };
        axios.post('https://devgroceryapi.spericorn.com/api/auth/register', data, { headers })
            .then(response => console.log(response));


    }




    return (
        <div className='registerBox' >
            <div style={{ fontSize: '20px', fontWeight: 'bold', paddingBottom: '10px' }}>REGISTER</div>
            <Formik
                initialValues={{
                    email: "",
                    password: '',
                    confirmPassword: '',
                    Username: '',
                    mobile: ''
                }}
                validationSchema={signupValidationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    handleSubmitClick(values)
                    setSubmitting(false)
                }}
            >
                {(formik) => {

                    return (
                        <form onSubmit={formik.handleSubmit} >
                            <div className='flexbox'>
                                <div >
                                    <div>   Email address   </div> <input type="email"

                                        placeholder="Email"
                                        onChange={(e) => {
                                            formik.handleChange('email')(e)

                                            //debounce api calling code here


                                        }
                                        }
                                        ref={emailInputRef}
                                        onBlur={formik.handleBlur('email')}
                                        value={formik.values.email}
                                        error={formik.errors.email}
                                    />
                                    {formik.errors.email && formik.touched.email && <span style={{ color: 'red', fontSize: '13px' }} >{formik.errors.email}</span>}
                                </div>

                                <div>
                                    <div> Username</div>
                                    <input

                                        type="text"
                                        placeholder="Username"
                                        onChange={formik.handleChange('Username')}
                                        value={formik.values.Username}
                                        error={formik.errors.Username}
                                        onBlur={formik.handleBlur('Username')}
                                    />
                                    {formik.errors.Username && formik.touched.Username && <span style={{ color: 'red', fontSize: '13px' }} >{formik.errors.Username}</span>}

                                </div>

                                <div>
                                    <div> Password   </div>
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
                                <div>
                                    <div>
                                        Confirm Password  </div>
                                    <input

                                        type="password"
                                        placeholder="ConfirmPassword"
                                        onChange={formik.handleChange('confirmPassword')}
                                        value={formik.values.confirmPassword}
                                        error={formik.errors.confirmPassword}
                                        onBlur={formik.handleBlur('confirmPassword')}
                                    />
                                    {formik.errors.confirmPassword && formik.touched.confirmPassword && <span style={{ color: 'red', fontSize: '13px' }} >{formik.errors.confirmPassword}</span>}

                                </div>


                                

                                <div>
                                    <div>  Mobile number  </div>
                                    <input

                                        type="text"
                                        placeholder="Mobile"
                                        onChange={formik.handleChange('mobile')}
                                        value={formik.values.mobile}
                                        error={formik.errors.mobile}
                                        onBlur={formik.handleBlur('mobile')}
                                    />
                                    {formik.errors.mobile && formik.touched.mobile && <span style={{ color: 'red', fontSize: '13px' }} >{formik.errors.mobile}</span>}

                                </div>

                                <div >

                                    <button style={{ fontSize: '17px', marginTop: '10px' }}
                                        type="submit"
                                    >
                                        Signup
                                    </button>

                                </div>
                            </div>
                        </form>
                    );
                }}
            </Formik>
        </div>


    )

}
export default Registration;