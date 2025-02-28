import React, { useState, useEffect } from "react";
import API from "../api.js";
import "../Loans.css";
import { toast } from "react-toastify";

function LoanList() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await API.get("/available");
        if (response.status === 200) {
          const updatedLoans = response.data.map(loan => ({
            ...loan,
            status: loan.status || "Pending"
          }));
          setLoans(updatedLoans);
        } else {
          toast.error("Failed to fetch loans.");
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Error fetching loans.");
      }
    };

    fetchLoans();
  }, []);

  const handleInvestment = async (loan) => {
    try {
      const response = await API.post(`/${loan._id}/invest`, { status: "Approved" });
      if (response.status === 200) {
        toast.success("Investment successful!");
        // Remove loan from available list
        setLoans(loans.filter(l => l._id !== loan._id));
      } else {
        toast.error("Failed to invest in the loan.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error processing investment.");
    }
  };

  return (
    <div className="loan-list-container">
      <h2 className="loan-list-title">Loan Requests</h2>
      {loans.length === 0 ? (
        <p className="text-center text-gray-600">No loan requests found.</p>
      ) : (
        <div className="loan-grid">
          {loans.map((loan) => (
            <div key={loan._id} className="loan-card">
              <p className="loan-amount">Amount: ₹{loan.amount}</p>
              <p className="loan-duration">Duration: {loan.duration} months</p>
              <p className="loan-interest">Interest Rate: {loan.interestRate}%</p>
              <p className="loan-purpose">Purpose: {loan.purpose}</p>
              <button 
                className="invest-button"
                onClick={() => handleInvestment(loan)}
              >
                Invest
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LoanList;