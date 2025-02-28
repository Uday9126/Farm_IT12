import { Link } from "react-router-dom";

const FarmerDashboard = () => {
    return (
        <div className='investordash' >
            <div>
                <h1> 💼 Investor DashBoard</h1>
          </div>
        <ul className='Idu'>
           
            <li>
            <button type='click' className='IBut2'><Link to='/LoanList'> Show Loans</Link></button>
            </li>
            <li>
            <button type='click' className='IBut3'><Link to='/InvestmentList'> My Investments</Link></button>
                </li>
                <li>
            <button  className='IBut1'>  <Link to=''>Tracking</Link></button>
            </li>
        <li>
            <button type='click' className='IBut3'><Link to=''>Raise Issue</Link></button>
        </li>
        </ul>
    
    </div>
    )
}
export default FarmerDashboard;

