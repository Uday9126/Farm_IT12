import { useState } from "react"
import API from "../api";
import { toast } from "react-toastify";

const CreateLoan = () => {
   

    const [formData, setFormData] = useState({
       
        amount: "",
        interestRate: "",
        duration: ""
    });
   
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post('/CreateLoaRequest',formData);
            toast.success("Loan Created Successfully");


        } catch (err) {
            toast.error(err.response?.data?.message || "Error during registration");
          }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
            
                <input
                    type="number"
                    placeholder="Amount"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })
                    }
                    required
                
                />
                <br></br>
                <input
                    type="number"
                    placeholder="IntrestRate"
                    value={formData.interestRate}
                    onChange={(e)=>setFormData({...formData,interestRate:e.target.value})}
                required
                />
                <br></br>
                <input
                    type="number"
                    placeholder="Duration"
                    value={formData.duration}
                    onChange={(e)=>setFormData({...formData,duration:e.target.value})}
                />
                <button type="submit" className="m">
          Register
        </button>
        </form>
    </div>
    )
}
export default CreateLoan;