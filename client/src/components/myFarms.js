// import React, { useState, useEffect } from "react";
// import API from "../api.js";
 

// function AllFarms() {
//     const [allFarms, setAllFarms] = useState([])

//     useEffect(() => {
//         getallfamrs();
//     }, []);



//     const getallfamrs = async () => {
//         try {
//             let response = await API.get("/myfarms");
//             setAllFarms(response.data);
//         } catch (error) {
//             console.error("Error fetching cart products:", error);
//         }
//     };

//     return (
//         <div className="farms-container3">
//             <h1>All Farms</h1>
//             {allFarms.length === 0 ? (
//                 <p>There are no famrs on your ID.</p>
//             ) : (
//                 <div className="grid1">
//                     {allFarms.map((item) => (
//                         <div key={item._id} className="card">
//                         <img
//                              src={item.images}
//                             alt={item.model}
//                             className="card-image"
//                         />
                            
//                             {/* <img
//                     src={`http://localhost:5001/${item.images[0]}`}
//                     alt="Farm Land"
//                     className="farm-thumbnail"
//                   /> */}
//                         <h2>{item.name}</h2>
//                             <p>{item.description}</p>
//                             <p>{item.location}</p>
//                             <p>{item.farmType}</p>
//                             <p>{item.size}</p>
//                     </div>
//                     ))}
//                 </div>
//             )}
//         </div>
        
//     )
// }
// export default AllFarms




import React, { useState, useEffect } from "react";
import API from "../api.js";
import { Link} from "react-router-dom";

function AllFarms() {
    const [allFarms, setAllFarms] = useState([]);

    

  

    const getAllFarms = async () => {
        try {
            const response = await API.get("/myfarms");
            setAllFarms(response.data);
            
        } catch (error) {
            console.error("Error fetching farms:", error);
        }
    };
    useEffect(() => {
        getAllFarms();
    }, []);

    return (
        <div className="farms-container3">
            <h1>All Farms</h1>
            {allFarms.length === 0 ? (
                <p>There are no farms on your ID.</p>
            ) : (
                <div className="grid1">
                    {allFarms.map((item) => (
                        <div key={item._id} className="card">
                            <img
                                src={item.images[0] || item.images} // Ensure this works with your API's response
                                alt={item.name}
                                className="card-image"
                                onError={(e) => { e.target.src = "/placeholder.jpg"; }} // Fallback image
                            />
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <p>{item.location}</p>
                            <p>{item.farmType}</p>
                            <p>{item.size}</p>
                            <Link to='/createLoan'>
                                <button> Apply loan</button>
                            </Link>
                        </div>
                    ))}
                </div>
            )}    
        </div>
    );
}

export default AllFarms;
