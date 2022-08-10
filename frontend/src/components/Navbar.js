import {useContext} from "react";
import {Link} from "react-router-dom";
import AuthContext from "../context/AuthContext";


const Navbar = () => {
    const {user, logoutUser} = useContext(AuthContext)
    return (
        <nav>
            <div  className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-1 border-bottom'>
                <div className="col-md-3 text-center align-middle ">
                    <h4 className=''>
                        App Name
                    </h4>
                </div>
                <div className='col-md-3 d-flex  justify-content-between'>
                    {user ? (
                        <>
                            <Link to='/'>
                                <div className="btn btn-outline-primary me-2v">
                                    Home
                                </div>
                            </Link>
                            <Link to='/protected'>
                                <div className="btn btn-outline-primary me-2v">
                                    Protected Page
                                </div>
                            </Link>
                            <button className='btn btn-outline-primary me-2v' onClick={logoutUser}>Log out</button>
                        </>
                    ) : (
                        <>
                            <Link to='/login'>
                                <div className="btn btn-outline-primary me-2v">
                                    Login
                                </div>
                            </Link>
                            <Link to='/register'>
                                <div className="btn btn-outline-primary me-2">
                                    Register
                                </div>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}
export default Navbar