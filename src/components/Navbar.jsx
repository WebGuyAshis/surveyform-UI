import { useNavigate } from 'react-router-dom';
import '../assets/css/navbar.css'
const Navbar = () =>{

    const navigate = useNavigate()
    return(
        <div className="navbar-container">
            <button className="admin-login-btn" onClick={()=>{navigate('/login')}}>Admin Login</button>
        </div>
    )
}

export default Navbar;