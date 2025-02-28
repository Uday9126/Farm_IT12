import { Link } from "react-router-dom";

const AdminDashboard = () => {
    return (
        <div className='Admindash'>
            <div>
                <h1>
                    Admin DashBoard
                </h1>
          </div>
        <ul className='Adu'>
           
            <li>
            <button type='click' className='ABut2'><Link to='/AllLoans'> Loans</Link></button>
            </li>
            <li>
            <button type='click' className='ABut3'><Link to='/All1Farms'>Farms </Link></button>
                </li>
                <li>
            <button  className='ABut1'>  <Link to='/Issues'>Issues</Link></button>
            </li>
        <li>
            <button type='click' className='ABut3'><Link to='/ManageUsers'>Manage Users</Link></button>
        </li>
        </ul>
    
    </div>
    )
}
export default AdminDashboard;

