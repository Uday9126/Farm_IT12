import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const FarmerDashboard = () => {
    


    
  return (
      
      
      <div className='farmerdash'>
          <h1>👨‍🌾 Farmer Dashboard</h1>
              <ul className='Fdu'>
                  <li>
                  <button  className='fBut1'>  <Link to='/AddFarm'>Upload Farm Details</Link></button>
                  </li>
                  <li>
                  <button type='click' className='fBut2'><Link to='/DocumentUpload'>My Documents</Link></button>
                  </li>
                  <li>
                  <button type='click' className='fBut3'><Link to='/createLoan'>Create Loan</Link></button>
              </li>
              <li>
                  <button type='click' className='fBut4'><Link to='/AllFarms'>My Farms</Link></button>
              </li>
              <li>
                  <button type='click' className='fBut5'><Link to='/repay'>Re Pay</Link></button>
              </li>
              <li>
                  <button type='click' className='fBut5'><Link to='/rissue'>Raise Issue</Link></button>
              </li>
                  
                 
              </ul>
          
          </div>
       
          
    
  )
}

export default FarmerDashboard;