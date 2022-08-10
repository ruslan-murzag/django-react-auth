import {useContext} from "react";
import AuthContext from "../context/AuthContext";


const LoginPage = () => {
    const {loginUser} = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault()
        const username = e.target.username.value;
        const password = e.target.password.value
        username.length > 0 && loginUser(username, password)
    }
    return (
        <section className='form'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <hr/>
                <div className="form-outline mb-4">
                    {/*<label htmlFor="username" className='form-label'>Username</label>*/}
                    <input type="text" id='username' className='form-control' placeholder='Enter Username'/>
                </div>
                <div className="form-outline mb-4">
                    {/*<label htmlFor="password">Password</label>*/}
                    <input type="password" id='password' className='form-control' placeholder='Enter Password'/>
                </div>

                <button type='submit' className='btn btn-primary btn-block mb-4'>Sign in</button>
            </form>
        </section>
    )
}
export default LoginPage