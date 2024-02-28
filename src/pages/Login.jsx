import React from 'react';
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div className='auth'>
            <h1>Acceso</h1>
            <form>
                <input required type="text" placeholder='username'/>
                <input required type="password" placeholder='password'/>
                <button>Entrar</button>
                <p>¡Esto es un error!</p>
                <span>¿No tienes una cuenta? <Link to='/register'>¡Registrate Aquí!</Link></span>
            </form>
        </div>
    );
}

export default Login;