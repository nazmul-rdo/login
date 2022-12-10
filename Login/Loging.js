import React, { useRef } from 'react'
import './loging.css'

const Loging = () => {

    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleLogin = (event) => {
        event.preventDefault();

        console.log("kdhsfjdsmg", usernameRef)
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        usernameRef.current.value = '';
        passwordRef.current.value = '';

        let massage = `
            User Name : ${username}  &
            Password : ${password}
        `;
        alert(massage);

    }

    return (
        <div className='main-continer'>
            <form
                onSubmit={(event) => handleLogin(event)}
                className='login-continer'>
                <h3>Wellcome! login here</h3>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        ref={usernameRef}
                        type="text"
                        placeholder='Enter your user Name'
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        id='password'
                        ref={passwordRef}
                        type="password"
                        placeholder='Enter your password'
                    />
                </div>
                <button type="submit">login</button>
            </form>
        </div>
    )
}

export default Loging