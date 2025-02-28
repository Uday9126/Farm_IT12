
import './App.css';

import Register from './components/register.js'
import SignUp from './components/SignUp.js';
import Login from './components/login.js'
import SurveyDetails from './components/ServeyDetails.js'
import Home from './components/Home.js'
import FarmerDashboard from './components/FarmerDashboard.js'
import  InvestorDashboard from './components/InvestorDashboard.js'
import AllFarms from './components/myFarms.js'
import CreateLoan from './components/createLoan.js'
import LoanList from './components/InvestLoan.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AboutUs from './components/AboutUs.js';
import AddFarm from './components/UploadFarmDetails';
import InvestmentList from './components/Myinvestment.js'
import AdminDashboard from './components/AdminDashboard';
import AllLoans from './components/AdminLoans.js'
import All1Farms from './components/AdminFarms.js'
import ManageUsers from './components/AdminUser.js'
import DocumentUpload from './components/FarmerDocument.js'
import RepayLoan from './components/FarmerRepay.js'
import Issue from './components/FarmerIssue.js'
import Issues from './components/AdminIssues.js'


function App() {
    return (
        <div>
            <Router>
                <ToastContainer></ToastContainer>
                <nav >
                <div>
                    <h1>
                        Farm IT
                    </h1>
                </div>
                    
                    <ul className='ul'>
                        <li ><Link to='/Home'>Home</Link>       </li>

                        <li><Link to='/AboutUs'>About Us</Link></li>

                        <li><Link to='/SuveyDetails'>Survey Details</Link></li>

                        <li> Join Us</li>

                        <li ><Link to='/SignUp'>Sign Up</Link></li>

                    </ul>
                </nav>
                <div className='backgroundimage'>
                <Routes>
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registerUser" element={< Register/>}/>
                    <Route path="/SuveyDetails" element={< SurveyDetails/>}/>
                    <Route path="/Home" element={< Home />} />
                    <Route path='/farmerDashboard' element={<FarmerDashboard />} />
                        <Route path='/AboutUs' element={<AboutUs />} />
                        <Route path='/AddFarm' element={<AddFarm />} />
                        <Route path='/InvestorDashboard' element={<InvestorDashboard />} />
                        <Route path='/AllFarms' element={<AllFarms />} />
                        <Route path='/createLoan' element={<CreateLoan />} />
                        <Route path='/LoanList' element={<LoanList />} />
                        <Route path='/InvestmentList' element={< InvestmentList />} />
                        <Route path='/AdminDashboard' element={< AdminDashboard />} />
                        <Route path='/AllLoans' element={< AllLoans />} />
                        <Route path='/All1Farms' element={<  All1Farms />} />
                        <Route path='/ManageUsers' element={<  ManageUsers />} />
                        <Route path='/DocumentUpload' element={<  DocumentUpload />} />
                        <Route path='/repay' element={<  RepayLoan/>} />
                        <Route path='/rissue' element={< Issue />} />
                        <Route path='/Issues' element={< Issues/>} />


                        
                        
                        

                        
                        

                       


                        
                        
                    </Routes>
                    </div>
            
            </Router>
            </div>
  );
}


export default App;
