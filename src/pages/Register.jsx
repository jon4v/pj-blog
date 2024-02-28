import React from 'react';
import {Link} from 'react-router-dom'

function Register() {
    return (
        <div className='auth'>
            <h1>Login</h1>
            <form>
                <input required type="text" placeholder='username'/>
                <input required type="email" placeholder='email'/>
                <input required type="password" placeholder='password'/>
                <button>Regístrate</button>
                <p>¡Esto es un error!</p>
                <span>¿Tienes una cuenta? <Link to='/login'>¡Crea tu Cuenta!</Link></span>
            </form>
        </div>
    );
}

export default Register;