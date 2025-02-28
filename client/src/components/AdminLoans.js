

import React, { useState, useEffect } from "react";
import API from "../api.js";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function AllLoans() {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await API.get("/getAllLoans");
        if (response.status === 200) {
          setLoans(response.data);
        } else {
          toast.error("Failed to fetch loans.");
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Error fetching loans.");
      } finally {
        setLoading(false);
      }
    };

    fetchLoans();
  }, []);

  return (
      <div className="loan-list-container">
          <div className="ALHB">
          <h2 className="loan-list-titleloan">All Loans</h2>
          <Link to={'/AdminDashboard'} >
              <button className="AallLoanbut">← Back</button>
              </Link>
              </div>
      {loading ? (
        <p className="text-center text-gray-600">Loading loans...</p>
      ) : loans.length === 0 ? (
        <p className="text-center text-gray-600">No loans found.</p>
      ) : (
        <div className="loan-grid">
          {loans.map((loan) => (
            <div key={loan._id} className="loan-card">
              <p className="loan-farmer">Farmer: {loan.farm?.farmer?.firstName} {loan.farm?.farmer?.lastName}</p>
              <p className="loan-amount"> Amount: ₹{loan.amount}</p>
              <p className="loan-status"> Status: {loan.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllLoans;