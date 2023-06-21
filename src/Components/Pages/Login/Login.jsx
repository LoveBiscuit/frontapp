/* eslint-disable jsx-a11y/alt-text */
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { userLogin } from './../../../Redux/authReducer';
import s from './Login.module.css';
import { Navigate } from 'react-router-dom';

function Login(props) {
    // props.userLogin({email: 'qytslnlti@nightorb.com', password: 'troytroy123', rememberMe: false});

    function sendUserDataToLogin(data) {
        props.userLogin(data);
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return (
        <>
            <div className={s.wrapper}>
                <LoginForm sendUserDataToLogin={sendUserDataToLogin} authError={props.authError} />
            </div>
        </>
    );
}

function LoginForm(props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({});

    return (
        <>
            <form onSubmit={handleSubmit((data) => props.sendUserDataToLogin(data))}>
                {props.authError?.messages && <p className={s.formError}>{props.authError.messages}</p>}
                <div className={s.formInput}>
                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' placeholder='Email' {...register('email', {
                        required: 'Email is required.',
                        pattern: {
                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                            message: 'Please enter correct email.'
                        }
                    })} />
                    {errors.email && <p className={s.formError}>{errors.email?.message}</p>}
                </div>
                <div className={s.formInput}>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' placeholder='Password' {...register('password', {
                        required: 'Password is required.',
                        minLength: {
                            value: 6,
                            message: 'Password cannot be less than 6 characters.'
                        },
                        maxLength: {
                            value: 16,
                            message: 'Password cannot be more than 16 characters.'
                        }
                    })} />
                    {errors.password && <p className={s.formError}>{errors.password?.message}</p>}
                </div>
                <div className={s.formCheckbox}>
                    <label>
                        <input type='checkbox' {...register('rememberMe', {})} />
                        <span>Remember me?</span>
                    </label>
                </div>
                <div className={s.formButton}>
                    {
                        errors?.email || errors?.password
                            ? <input disabled type="submit" value='Какая-то ошибка' />
                            : <input type="submit" value='Авторизироваться' />
                    }
                </div>
            </form>
        </>
    );
}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = {
    userLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
