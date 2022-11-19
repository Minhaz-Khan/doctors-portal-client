import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import GradientText from '../../Component/GradientText/GradientText';
import { authContext } from '../../Context/AuthProvider';

const SingUp = () => {
    const { signup, updateUserInfo } = useContext(authContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signupError, setSignUpError] = useState('')
    const navigate = useNavigate()
    const handleSignUp = (data) => {
        console.log(data);

        signup(data.email, data.password)
            .then(result => {
                const user = result.user;

                console.log(user.name);

                Swal.fire({
                    icon: 'success',
                    title: 'SignUp successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                const userInfo = {
                    displayName: data.name
                }
                console.log(userInfo);
                updateUserInfo(userInfo)
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Name update successfully',
                            showConfirmButton: false,
                            timer: 1500,
                        })
                        navigate('/')
                    })
                    .catch(e => console.log(e))
            })
            .catch(e => {
                setSignUpError(e.message)
                console.error(e)
            })
    }
    return (
        <div className=' h-screen w-full flex justify-center items-center'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                    <h3 className='text-xl text-center'>SignUp</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register('name', { required: true })} aria-invalid={errors.name ? "true" : "false"} type="text" className="input input-bordered" />
                        {errors.name?.type === 'required' && <p className='text-red-500' role="alert">First name is required</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register('email', { required: true })} aria-invalid={errors.email ? "true" : "false"} type="email" className="input input-bordered" />
                        {errors.email?.type === 'required' && <p className='text-red-500' role="alert">Email is required</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register('password', {
                            required: 'input your password must', minLength: { value: 6, message: 'password must be 6 charecter' }, pattern: {
                                value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                , message: 'password must be strong'
                            }
                        })} type="password" className="input input-bordered" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        {/* {errors.password && errors.password.type === 'minLength' && <p className='text-red-500'>Password must be 6 chrecter</p>} */}
                        {signupError && <p className='text-red-600'>{signupError}</p>}

                    </div>
                    <div className="form-control ">
                        <input type='submit' value={'Login'} className="btn btn-accent" />
                    </div>
                    <Link className='text-xs flex justify-center' to={'/login'}>Already Have an Account-<GradientText>Please Login</GradientText></Link>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline '>CONTINUE WITH GOOGLE</button>
                </form>
            </div>
        </div>
    );
};

export default SingUp;