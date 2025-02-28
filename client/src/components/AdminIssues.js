

import React, { useEffect, useState } from "react";
import API from "../api.js";
import { toast } from "react-toastify";
import "../Adminissues.css"; 
import { Link } from "react-router-dom";

const Issues = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await API.get("/getallissues");
        if (response.status === 200) {
          setIssues(response.data);
        } else {
          toast.error("Failed to fetch issues.");
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Error fetching issues.");
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, []);

  return (
      <div className="issues-container">
          <div className="adminissuemain">
          <h2 >Reported Issues</h2>
          <Link to={'/AdminDashboard'} >
            <button className="AallLoanbut4">← Back</button>
              </Link>
              </div>
          
      {loading ? (
        <p className="text-center text-gray-600">Loading issues...</p>
      ) : issues.length === 0 ? (
        <p className="text-center text-gray-600">No issues reported.</p>
      ) : (
        <div className="issues-cards-container">
          {issues.map((issue) => (
            <div className="issue-card" key={issue._id}>
              <h3 className="issue-title">{issue.issueTitle}</h3>
              
              <p className="issue-email">Email: {issue.user?.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Issues;
