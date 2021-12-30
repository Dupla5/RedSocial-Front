import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { startLogout } from "../../actions/auth";
import { removeData } from "../../actions/data";


export const Menu = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = ()=>{
        dispatch(removeData());
        dispatch(startLogout());
        navigate('/login', {
            replace: true
        })
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">CODERS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Feed</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="editProfile">Edit Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="help">Help</Link>
                        </li>
                        <button className="btn btn-outline-warning" onClick={handleLogout}>Logout</button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
