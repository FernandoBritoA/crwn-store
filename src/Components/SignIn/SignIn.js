import React from 'react';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'

import { signInWithGoogle } from '../../Firebase/Firebase'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => { //prevent mistakes
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });//name can be email or password; dinamic selector
        //this way we dont have to write separate functions that do the same
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label='password'
                        required
                    />

                    <div className='buttons'>
                        {/*<input type='submit' value='Submit Form' />*/}
                        <CustomButton type='submit' isGoogleSignIn={false}>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}
export default SignIn;