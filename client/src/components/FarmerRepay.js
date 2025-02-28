// import React, { useState } from "react";
// import API from "../api.js";
// import { toast } from "react-toastify";

// const RepayLoan = () => {
//   const [repayment, setRepayment] = useState({ loanId: "", amount: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setRepayment({ ...repayment, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem("token");
//     if (!token) {
//       toast.error("Please log in first.");
//       return;
//     }

//     if (!repayment.loanId || !repayment.amount) {
//       toast.error("Loan ID and Amount are required.");
//       return;
//     }

//     try {
//       setLoading(true);
//       await API.post(`/repay`, { amount: repayment.amount }, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       toast.success("Loan repayment successful!");
//       setRepayment({ loanId: "", amount: "" }); // Reset form
//     } catch (error) {
//       console.error("Repayment error:", error);
//       toast.error(error.response?.data?.message || "Repayment failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="form-containerFR">
//       <h2 className="text-xl font-bold text-center mb-4">💰 Repay Loan</h2>
//       <form onSubmit={handleSubmit} className="form">
//         <input
//           type="text"
//           name="loanId"
//           placeholder="Enter Loan ID"
//           value={repayment.loanId}
//           onChange={handleChange}
//           required
//           className="input-field"
//         />
//         <input
//           type="number"
//           name="amount"
//           placeholder="Enter Amount to Repay"
//           value={repayment.amount}
//           onChange={handleChange}
//           required
//           className="input-field"
//         />
//         <button type="submit" className="submit-btn" disabled={loading}>
//           {loading ? "Processing..." : "Repay Loan"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RepayLoan;



import React, { useState } from "react";
import API from "../api.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure this is included to style toast notifications

const RepayLoan = () => {
  const [repayment, setRepayment] = useState({ loanId: "", amount: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setRepayment({ ...repayment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please log in first.");
      return;
    }

    if (!repayment.loanId || !repayment.amount) {
      toast.error("Loan ID and Amount are required.");
      return;
    }

    try {
      setLoading(true);

    //   Make the API call to repay the loan
      const response = await API.post(
        `/repay`,
        {
          loanId: repayment.loanId, // Pass the loanId in the request body
          amount: repayment.amount,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
          );
        
        // await API.post(`/Main/repay`, { loanId: repayment.loanId, amount: repayment.amount }, {
        //     headers: { Authorization: `Bearer ${token}` },
        //   });
          

      toast.success(response.data?.message || "Loan repayment successful!");
      setRepayment({ loanId: "", amount: "" }); // Reset form fields
    } catch (error) {
      console.error("Repayment error:", error);
      toast.error(
        error.response?.data?.message || "Repayment failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-containerFR">
      <h2 className="text-xl font-bold text-center mb-4">💰 Repay Loan</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="loanId"
          placeholder="Enter Loan ID"
          value={repayment.loanId}
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="number"
          name="amount"
          placeholder="Enter Amount to Repay"
          value={repayment.amount}
          onChange={handleChange}
          required
          className="input-field"
        />
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Processing..." : "Repay Loan"}
        </button>
      </form>
    </div>
  );
};

export default RepayLoan;



