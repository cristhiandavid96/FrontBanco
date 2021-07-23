import React from 'react'
import styles from './loginStyle'
import LoginForm from '../../../../src/pages/login/LoginForm'

let classes = styles()

export default function Login() {


    return (
        <div >
            <LoginForm style={classes} />
        </div >
    )
}