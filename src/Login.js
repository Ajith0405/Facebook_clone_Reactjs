import React from 'react'
import { useState } from 'react';
import { RegisterApi } from './services/Api'
import { LoginApi } from './services/Api';
import { storeUserData } from './services/Storage'
import { isAunthenticate } from './services/Auth';
import { Navigate, Link } from 'react-router-dom';

function Login() {

    // Create New Account
    const initialStateErrors = {
        name: { required: false },
        email: { required: false },
        password: { required: false },
        customError: null
    }
    const [errors, setErrors] = useState(initialStateErrors);
    const [loading, setLoading] = useState(false);
    const [delayInSeconds, setDelayInSeconds] = useState(1);

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        let errors = initialStateErrors;
        let hasError = false;

        if (inputs.name === "") {
            errors.name.required = true;
            hasError = true;
        }
        if (inputs.email === "") {
            errors.email.required = true;
            hasError = true;
        }
        if (inputs.password === "") {
            errors.password.required = true;
            hasError = true;
        }


        if (!hasError) {
            setLoading(true);

            RegisterApi(inputs).then((resp) => {
                // console.log(resp);

            }).catch((err) => {
                console.log(err);
                if (err.response.data.error.message === "EMAIL_EXISTS") {
                    setErrors({ ...errors, customError: "Email Already Registered.." })
                } else if (String(err.response.data.error.message).includes('WEAK_PASSWORD')) {
                    setErrors({ ...errors, customError: "Password should be at least 6 characters" })
                }
            }).finally(() => {
                setLoading(false);
            })

        }
        setErrors({ ...errors });

        setTimeout(() => {
            window.location.reload();
        }, delayInSeconds * 1000);
    }
    const handleInput = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value })
    };



    if (isAunthenticate()) {
        ;
    }

    // Login 

    const initialStateLoginErrors = {
        email: { required: false },
        password: { required: false },
        customError: null
    }

    const [loginErrors, setLoginErrors] = useState(initialStateLoginErrors);
    const [loginLoading, setLoginLoading] = useState(false);

    const [loginInputs, setLoginInputs] = useState({
        email: "",
        password: "",

    });

    const handleLoginInput = (event) => {
        setLoginInputs({ ...loginInputs, [event.target.name]: event.target.value })
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        let errors = initialStateLoginErrors;
        let hasError = false;

        if (loginInputs.email === "") {
            errors.email.required = true;
            hasError = true;
        }
        if (loginInputs.password === "") {
            errors.password.required = true;
            hasError = true;
        }



        if (!hasError) {
            setLoginLoading(true);

            LoginApi(loginInputs).then((res) => {
                storeUserData(res.data.idToken);
            }).catch((err) => {
                // console.log(err);
                if (err.code = "ERR_BAD_REQUEST") {
                    setLoginErrors({ ...errors, customError: "Invalid Username/Password" })
                }

            }).finally(() => {
                setLoginLoading(false);
            })

        }

        setLoginErrors({ ...errors });

    }

    

    if (isAunthenticate()) {
        return <Navigate to="/home" />
    }


    return (
        <div style={{ height: '100vh' }}>
            <div className="d-flex justify-content-center h-100">
                <div className='row'>
                    <div className="col-12 col-lg-6 " >
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className=''>
                                <h1 className='text-primary ps-2' style={{ fontSize: '54px', fontWeight: '700' }}>facebook</h1>
                                <h3 className='ps-2'>Facebook helps you connect and share with the people in your life.</h3>
                            </div>
                        </div>


                    </div>
                    <div className='col-12 col-lg-6 col-sm-12 '>
                        <div className='h-100 d-flex justify-content-center align-items-center'>
                            <div className=''>
                                <div className='card w-100' style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                                    <form className='px-3 mt-3' onSubmit={handleLoginSubmit}>
                                        <input className='form-control py-3 mb-3' type='text' placeholder='Email address or phone number' name='email' id='email' onChange={handleLoginInput} />
                                        {loginErrors.email.required ? (
                                            <span className='text-danger'>Email/Username is required..</span>
                                        ) : null}
                                        <input className='form-control py-3 mb-3' type='password' onChange={handleLoginInput} name='password' id='password'  placeholder='Password' />
                                        {loginErrors.password.required ? (
                                            <span className='text-danger'> Password is required.. </span>
                                        ) : null}

                                        {loginLoading ? (
                                            <div className='d-flex justify-content-center'>
                                                <span className="spinner-border text-dark " role="status"></span>
                                            </div>

                                        ) : null}
                                        <div className='text-center'>
                                            <button type='submit' className='btn btn-primary w-75' style={{ fontSize: '20px', fontWeight: '600' }}>
                                                Log in
                                            </button>
                                        </div>
                                        <div className='text-center mt-2'>
                                            <a href='#' style={{ textDecoration: 'none' }}>Forgotten password?</a>
                                        </div>
                                        <hr />
                                    </form>
                                    <div className='text-center mb-2'>

                                        <button type="button" className="btn px-3" data-bs-toggle="modal" data-bs-target="#myModal" style={{ backgroundColor: '#5BB318', padding: '10px 0px', color: '#ffff', fontSize: '15px', fontWeight: '600' }}>
                                            Create new account
                                        </button>
                                    </div>
                                </div>
                                <div className='text-center mt-2'>
                                    <p><b>Create a Page</b> for a celebrity, brand or business.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            {/* Create new account  */}
            <div>
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="d-flex justify-content-between mx-2 mt-1" >
                                <h4 className="modal-title">Signup</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <p className='ms-2' style={{ borderBottom: '1px solid gray' }}>It's quick and easy.</p>

                            <div className="container">

                                <form onSubmit={handleSubmit}>
                                    <div className='row mb-2'>
                                        <div className='col-6 col-lg-6 '>
                                            <input className='form-control' type='text' placeholder='First name' name='name' onChange={handleInput} required />
                                            {errors.name.required ? (
                                                <p className="text-danger ms-5" >
                                                    Name is required.
                                                </p>
                                            ) : null}
                                        </div>
                                        <div className='col-6 col-lg-6'>
                                            <input className='form-control' type='text' placeholder='Surname' required />
                                        </div>
                                    </div>
                                    <div className='row mb-2'>
                                        <div className='col-12 col-lg-12'>
                                            <input className='form-control' type='email' placeholder='Mobile number or Email' name='email' id='email' onChange={handleInput} required />
                                            {errors.email.required ? (
                                                <p className='text-danger ms-5'>
                                                    Email is required.
                                                </p>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className='row mb-2'>
                                        <div className='col-12 col-lg-12'>
                                            <input className='form-control' type='password' placeholder='New password' name='password' id='password' onChange={handleInput} required />
                                            {errors.password.required ? (
                                                <span className="text-danger ms-5" >
                                                    Password is required.
                                                </span>

                                            ) : null}
                                        </div>
                                    </div>
                                    <div className='row mb-2'>
                                        <div className='col-12 col-lg-12'>
                                            <label className='form-label ms-1' style={{ fontSize: '12px' }}>Date of birth</label>
                                            <input className='form-control' type='date' />
                                        </div>
                                    </div>
                                    <div className='row mb-2'>
                                        <div className='col-12 col-lg-12'>
                                            <p className='ms-1' style={{ fontSize: '12px' }}>Gender</p>
                                            <div className='d-flex justify-content-around'>
                                                <div class="form-check" >
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label class="form-check-label" for="flexRadioDefault1">
                                                        Male
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label class="form-check-label" for="flexRadioDefault1">
                                                        Female
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label class="form-check-label" for="flexRadioDefault1">
                                                        Others
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mt-2'>
                                        <p className='' style={{ fontSize: '12px', color: 'gray' }}>People who use our service may have uploaded your contact information to Facebook. <a href='#' style={{ textDecoration: 'none' }}>Learn more</a>.</p>
                                    </div>
                                    <div>
                                        <p className='' style={{ fontSize: '12px', color: 'gray' }}>By clicking Sign Up, you agree to our<a href='#' style={{ textDecoration: 'none' }}> Terms</a> , <a href='#' style={{ textDecoration: 'none' }}> Privacy Policy</a> and <a href='#' style={{ textDecoration: 'none' }}> Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.</p>
                                    </div>

                                    <div className=''>
                                        {errors.customError ? (
                                            <span className='text-danger ps-3'>
                                                {errors.customError}
                                            </span>
                                        ) : null}
                                    </div>
                                    <div >
                                        {
                                            loading ? (
                                                <div className='d-flex justify-content-center'>
                                                    <span className="spinner-border text-dark " role="status"></span>
                                                </div>

                                            ) : null
                                        }
                                    </div>

                                    <div className="d-flex justify-content-center mb-2">
                                        <button type="submit" className="btn btn-success px-5 py-2">Submit</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login