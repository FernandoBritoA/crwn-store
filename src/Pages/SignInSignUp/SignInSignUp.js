import React from 'react'
import './SignInSignUp.scss'
import SignIn from '../../Components/SignIn/SignIn'
import SignUp from '../../Components/SignUp/SignUp';

const SignInSignUp = () => {
    return (
        <div className='sign-in-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}
export default SignInSignUp;