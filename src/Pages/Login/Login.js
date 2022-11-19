import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import GradientText from '../../Component/GradientText/GradientText';
import { authContext } from '../../Context/AuthProvider';

const Login = () => {
    const { login, googleSignIn, forgetPass } = useContext(authContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('');
    const [onEmail, setOnEmail] = useState('')
    console.log(onEmail);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const Navigate = useNavigate()
    const handleLogin = (data) => {
        console.log(data);
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    icon: 'success',
                    title: 'Login successfully',
                    showConfirmButton: false,
                    timer: 1500,
                })
                Navigate(from, { replace: true })

            })
            .catch(e => {
                console.log(e.message)
                setLoginError(e.message)
            })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    icon: 'success',
                    title: `Login Successfully`,
                    showConfirmButton: false,
                    timer: 1500,
                })
                Navigate(from, { replace: true })
            })
            .catch(e => {
                console.error(e)
                Swal.fire({
                    icon: 'error',
                    title: `Oops... ${e.message}`,
                    showConfirmButton: false,
                    timer: 1500,
                })
            })
    }
    const handleForgetPass = () => {
        forgetPass(onEmail)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: `send a mail check your span or inbox`,
                    showConfirmButton: false,
                    timer: 1500,
                })
            })
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: `Oops... ${e.message}`,
                    showConfirmButton: false,
                    timer: 1500,
                })
            })
    }
    return (
        <div className=' h-screen w-full flex justify-center items-center'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                    <h3 className='text-xl text-center'>Login</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register('email', { required: true, onBlur: (e => setOnEmail(e.target.value)) })} aria-invalid={errors.email ? "true" : "false"} type="email" className="input input-bordered" />
                        {errors.email?.type === 'required' && <p role="alert">Email is required</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register('password', { required: 'input your password must', minLength: 6 })} type="password" className="input input-bordered" />
                        {errors.password && errors.password.type === 'required' && <p>{errors.password.message}</p>}
                        {errors.password && errors.password.type === 'minLength' && <p>Password must be 6 chrecter</p>}
                        {loginError && <p>{loginError}</p>}
                        <label className="label">
                            <Link className="label-text-alt link link-hover" onClick={handleForgetPass}>Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control ">
                        <input type='submit' value={'Login'} className="btn btn-accent" />
                    </div>
                    <Link to={'/signup'} className='text-xs flex justify-center'>New to Doctors Portal?<GradientText> Create new account</GradientText></Link>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline' onClick={handleGoogleSignIn}>CONTINUE WITH GOOGLE</button>
                </form>
            </div>
        </div>

    );
};

export default Login;